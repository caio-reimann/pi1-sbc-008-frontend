import './style.css';
import Logo from '../../assets/brand/logoOF.png';
import {Navigate, Link, useNavigate} from 'react-router-dom';
import React from 'react';
import {Api} from '../../context/Api';

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

export const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isLogin, setIsLogin] = React.useState(true);
    const navigate = useNavigate();

    const handleLogin = () => {
        if(!isLogin) {
            if(!validateEmail(email)) {
                setMessage('Email inválido!');
            } else {
                let recover = Api({
                    endpoint:'/recupera-senha', 
                    method:'PUT', 
                    data:{
                        "email": email
                    }
                });

                recover.then(res => {
                    setMessage(res.message);

                    if(res.message == 'Email enviado com sucesso'){
                        setIsLogin(true);
                    };
                });

                return;
            }
        };

        if(!validateEmail(email)) {
            setMessage('Email inválido!');
        } else if(password.length < 6) {
            setMessage('A senha deve ter no mínimo 6 caracteres!');
        } else {
            setMessage('');
        };

        let auth = Api({
            endpoint:'autenticacao', 
            method:'POST', 
            data:{
                "email": email,
                "password": password
            }
        });


        auth.then(res => {
            if(res.message){
                setMessage(res.message);
            };

            if(res.access_token){
                console.log(`/app?token=${res.access_token}`);
                navigate(`/app?token=${res.access_token}`, { replace: true });
                return <Navigate to={`/app?token=${res.access_token}`} />
            };
        });
    };

    const handleForgotPassword = () => {
        setIsLogin(false);
    };

    return (
        <div className='login'>
            <div className='login--logo'>
                <div className='login--logo--img' style={{backgroundImage: `url(${Logo})`}}></div>
                <div className='login--logo--text'>
                    Aqui, clientes e prestadores estão seguros durante a negociação de serviços, garantindo que tudo seja especificado e documentado.
                </div>
            </div>

            <div className='login--input'>
                <div className='login--input--signin'>
                    <input type='email' className='login--input--signin--email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />
                    {isLogin && <input type='password' className='login--input--signin--password' placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />}
                    <div className={message == '' ? 'login--message--off' : 'login--message'}>
                        {message}
                    </div>
                    <div className='button text-header' onClick={handleLogin}>{isLogin ? 'Entrar' : 'Recuperar a senha'}</div>
                    <div className='text-body login--forgot' onClick={handleForgotPassword}>Esqueci minha senha</div>

                </div>

                <div className='login--input--separator'></div>

                <div className='login--input--signup'>
                    <div className='label'>Primeira vez aqui?</div>
                    <Link to='/signup'>
                        <div className='button text-header'>Criar conta</div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

