import './style.css';
import React from 'react';
import {Api} from '../../context/Api';
import {useLocation} from "react-router-dom";
import { MdAdd, MdDelete, MdEmail } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa";


const Cadastrar = ({token, setCadastrarNovo, setTroca, troca}) => {
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
                setTroca(!troca)
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
    let [troca, setTroca] = React.useState(false);

    React.useEffect(() => {
        Api({endpoint:'orcamentos', method:'GET', token:token}).then(res => setOrcamentos(res.orcamentos));
    }, [troca]);

    const handleDelete = (id) => {
        console.log('deleta');
        Api({endpoint:`orcamento/${id}`, method:'DELETE', token:token}).then(res => {
            if(res == null){
                alert('Registro deletado!');
            } else {
                alert(res.message);
            }
        });
        setTroca(!troca);
    };

    const handleFilter = (e) => {
        if(e.target.value.length > 0){
            setOrcamentos(
                orcamentos.filter(item => (
                    (item.nome.indexOf(e.target.value) >= 0)
                    | (item.descricao.indexOf(e.target.value) >= 0)
                    | (item.email.indexOf(e.target.value) >= 0)
                ))
            )
        } else {
            setTroca(!troca);
        }
        
    };

    return (
        <div className='budget'>
            <div className='budget--new'>
                <div className='layout--navbar--search'>
                    <input type='search' placeholder='Digite algo aqui para pesquisar' onChange={(e) => handleFilter(e)}/>
                </div>

                <div className='budget--new--button' onClick={() => setCadastrarNovo(!cadastrarNovo)}>
                    {!cadastrarNovo ? <MdAdd /> : ''}
                    {!cadastrarNovo ? 'Cadastrar novo' : 'Voltar'}
                </div>
            </div>
            {cadastrarNovo ? (
                <Cadastrar token={token} setCadastrarNovo={setCadastrarNovo} setTroca={setTroca} troca={troca}/>
            ) : (
                orcamentos.map(data => (
                    <div className='budget--item--row' key={data.id}>
                        <div className='budget--item--row--user'>
                            <div className='text-header'>Cliente</div>
                            <div className='divider'></div>

                            <div className='text-header'>{data.nome}</div>

                            {data.email && <a target='_blank' href={`mailto:${data.email}`}>
                                <div className='budget--item--row--user--item'>
                                    <div className='text-body italic'>{data.email}</div>
                                    <MdEmail />
                                </div>
                            </a>}

                            {data.tel_celular && 
                                <div className='budget--item--row--user--item'>
                                    <div className='text-body italic'>{data.tel_celular}</div>
                                    <a target='_blank' href={`https://api.whatsapp.com/send?phone=55:${data.tel_celular.replace(/\D+/g, '')}`}>
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            }
                        </div>

                        <div className='budget--item--row--place'>
                            <div className='text-header'>Local</div>
                            <div className='divider'></div>

                            <div className='text-body'><span className='font-bold'>Endereço:</span> {data.logradouro}</div>
                            <div className='text-body'><span className='font-bold'>Número:</span> {data.numero}</div>
                            <div className='text-body'><span className='font-bold'>Bairro:</span> {data.bairro}</div>
                            <div className='text-body'><span className='font-bold'>Cidade:</span> {data.cidade}</div>
                            <div className='text-body'><span className='font-bold'>Estado:</span> {data.uf}</div>
                        </div>

                        <div className='budget--item--row--budget'>
                            <div className='text-header'>Orçamento</div>
                            <div className='divider'></div>

                            <div className='text-body'><span className='font-bold'>Data:</span> {data.data_inicio}</div>
                            <div className='text-body'><span className='font-bold'>Prazo:</span> {data.prazo}</div>
                            <div className='text-body'><span className='font-bold'>Descrição:</span> {data.descricao}</div>

                            <div className='budget--item--row--budget--buttons'>
                                <div className='button' onClick={() => handleDelete(data.id)}>
                                    Deletar
                                    <MdDelete />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
};

