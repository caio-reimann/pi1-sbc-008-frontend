import './style.css';
import Logo from '../../assets/brand/logoOF.png';

export const Login = () => {
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
                    <input type='email' className='login--input--signin--email' placeholder='Digite seu email'/>
                    <input type='password' className='login--input--signin--password' placeholder='Digite sua senha'></input>
                    <div className='button text-header'>Entrar</div>
                </div>

                <div className='login--input--separator'></div>

                <div className='login--input--signup'>
                    <div className='label'>Primeira vez aqui?</div>
                    <div className='button text-header'>Criar conta</div>
                </div>
            </div>
        </div>
    )
};

