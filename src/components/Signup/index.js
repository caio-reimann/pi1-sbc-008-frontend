import './style.css';
import Logo from '../../assets/brand/logo.png';
import {Api} from '../../context/Api';
import React from 'react';

export const Signup = () => {
    let [userData, setUserData] = React.useState({
        aceite_termo: true,
        email: '',
        identidade: '',
        nome: '',
        sobrenome: '',
        password: '',
        cpassword: '',
        profissao: '',
        sexo: '',
    });

    // let info = Api({
    //     endpoint:'/usuario', 
    //     method:'POST', 
    //     data:{
    //         "aceite_termo": true,
    //         "cpassword": "string",
    //         "email": "string",
    //         "identidade": "string",
    //         "nome": "string",
    //         "password": "string",
    //         "profissao": "string",
    //         "sexo": "M",
    //         "sobrenome": "string"
    //     }
    // })

    const handleUserInfo = (attr, event) => {
        userData[attr] = event.target.value
        setUserData(userData);
        console.log('User data', userData);
    };

    return (
        <div className='signup'>
            <div className='signup--header'>
                <div className='signup--header--logo' style={{backgroundImage: `url(${Logo})`}}></div>
                <div className='text-header'>Cadastre-se</div>
                <div className='text-body'>
                    Preencha os campos abaixo para completar o seu cadastro
                </div>
            </div>

            <div className='signup--form'>
                <div className='signup--form--personal'>
                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label'>Nome</div>
                        <input type='text' className='signup--form--item--input' onChange={(e) => handleUserInfo('nome', e)}/>
                    </div>

                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label'>Sobrenome</div>
                        <input type='text' className='signup--form--item--input' onChange={(e) => handleUserInfo('sobrenome', e)}/>
                    </div>

                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label' onChange={(e) => handleUserInfo('sexo', e)}>Sexo (M/F)</div>
                        <input type='text' className='signup--form--item--input' />
                    </div>

                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label'>Número do CPF</div>
                        <input type='text' className='signup--form--item--input' onChange={(e) => handleUserInfo('identidade', e)}/>
                    </div>

                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label'>Profissão</div>
                        <input type='text' className='signup--form--item--input' onChange={(e) => handleUserInfo('profissao', e)}/>
                    </div>

                    <div className='divider'></div>

                    <div className='signup--form--item--full'>
                        <div className='signup--form--item--label label'>Email</div>
                        <input type='email' className='signup--form--item--input' onChange={(e) => handleUserInfo('email', e)}/>
                    </div>

                    <div className='full'>
                        <div className='signup--form--item'>
                            <div className='signup--form--item--label label'>Senha</div>
                            <input type='password' className='signup--form--item--input' onChange={(e) => handleUserInfo('password', e)}/>
                        </div>

                        <div className='signup--form--item'>
                            <div className='signup--form--item--label label'>Confirmar senha</div>
                            <input type='password' className='signup--form--item--input' onChange={(e) => handleUserInfo('cpassword', e)}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='signup--footer'>
                <div className='signup--footer--terms text-body'>Ao se cadastrar no Orca Fácil você estará automaticamente concordando com os termos de serviço</div>
                <div className='signup--footer--submit button' >Criar cadastro</div>
            </div>
        </div>
    )
    };

