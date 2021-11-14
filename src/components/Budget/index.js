import './style.css';
import React from 'react';
import {Api} from '../../context/Api';
import {useLocation} from "react-router-dom";
import { MdAdd, MdEmail } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa";
import {Link} from "react-router-dom";


const Cadastrar = ({token, setCadastrarNovo}) => {
    let [messages, setMessages] = React.useState([]);
    let [data, setData] = React.useState({
        nome: "",
        email: "",
        tel_celular: "",
        identidade: "",
        descricao: "",
        info_complementar: "",

        logradouro: "",
        numero: "",
        bairro: "",
        cep: "",
        cidade: "",
        uf: "",
        complemento: "",

        data_inicio: "",
        desconto: 0,
        desconto_porcentagem: 0,
        prazo: 0,
        tipo_prazo: "",
        
    });

    const handleData = (attr, event) => {
        data[attr] = event.target.value
        setData(data);
        console.log('Data', data);
    };

    const handleSave = () => {
        let save = Api({endpoint:'orcamento', method:'POST', data:data, token:token})
        save.then(res => {
            if(!res.id){
                console.log('RES', res);
                let msg = [];
                Object.entries(res).forEach(([k,v]) => {
                    if(v[0]){
                        msg.push(v[0].toString());
                    }
                });
    
                if(msg.length > 0){
                    setMessages(msg);
                };
    
                if(res.message){
                    setMessages([res.message]);
                };
            } else {
                alert('Orçamento cadastrado com sucesso!');
                setCadastrarNovo(false);
            }
        });
    };

    return (
        <div className='budget--items'>
            <div className='budget--item w-full'>
                {messages != [] && messages.map((msg) => <div className='signup--alerts text-body mt-1 mb-1'>{msg}</div>)}
            </div>
            {Object.entries(data).map(([key, value]) => (
                <div className='budget--item' key={key}>
                    <div className='label capitalize'>{key.replace('_', ' ')}</div>
                    <input 
                        type={key == 'data_inicio' ? 'datetime-local' : 'text'} 
                        className='budget--item--input' 
                        onChange={(e) => handleData(key, e)}
                    />
                </div>
            ))}
            <div className='button' onClick={handleSave}>Salvar</div>
        </div>
    )
}

export const Budget = () => {
    let location = useLocation();
    let [params, setParams] = React.useState(new URLSearchParams(location.search));
    let token = params.get('token');
    let [orcamentos, setOrcamentos] = React.useState([]);
    let [cadastrarNovo, setCadastrarNovo] = React.useState(false);

    React.useEffect(() => {
        Api({endpoint:'orcamentos', method:'GET', token:token}).then(res => setOrcamentos(res.orcamentos))
    }, [token]);

    const handleSendEmail = () => {
        console.log('enviar email');
    };

    const handleSendWhatsApp = () => {
        console.log('enviar email');
    };

    return (
        <div className='budget'>
            <div className='budget--new'>
                <div className='layout--navbar--search'>
                    <input type='search' placeholder='Digite algo aqui para pesquisar' />
                </div>

                <div className='budget--new--button' onClick={() => setCadastrarNovo(true)}>
                    <MdAdd />
                    Cadastrar novo
                </div>
            </div>
            {cadastrarNovo ? (
                <Cadastrar token={token} setCadastrarNovo={setCadastrarNovo}/>
            ) : (
                orcamentos.map(data => (
                    <div className='budget--item--row' key={data.id}>
                        <div className='budget--item--row--user'>
                            <div className='text-header'>Cliente</div>
                            <div className='divider'></div>

                            <div className='text-header'>{data.nome}</div>

                            {data.email && <Link to={`mailto:${data.email}`}>
                                <div className='budget--item--row--user--item'>
                                    <div className='text-body italic'>{data.email}</div>
                                    <MdEmail />
                                </div>
                            </Link>}

                            {data.tel_celular && <Link to={`https://api.whatsapp.com/send?phone=55:${data.tel_celular.replace(/\D+/g, '')}`}>
                                <div className='budget--item--row--user--item'>
                                    <div className='text-body italic'>{data.tel_celular}</div>
                                    <FaWhatsapp />
                                </div>
                            </Link>}
                        </div>

                        <div className='budget--item--row--place'>
                            <div className='text-header'>Local</div>
                            <div className='divider'></div>

                            <div className='text-body'>Endereço: {data.logradouro}</div>
                            <div className='text-body'>Número: {data.numero}</div>
                            <div className='text-body'>Bairro: {data.bairro}</div>
                            <div className='text-body'>Cidade: {data.cidade}</div>
                            <div className='text-body'>Estado: {data.uf}</div>
                        </div>

                        <div className='budget--item--row--budget'>
                            <div className='text-header'>Orçamento</div>
                            <div className='divider'></div>

                            <div className='text-body'>Data: {data.data_inicio}</div>
                            <div className='text-body'>Prazo: {data.prazo}</div>
                            <div className='text-body'>Descrição: {data.descricao}</div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
};

