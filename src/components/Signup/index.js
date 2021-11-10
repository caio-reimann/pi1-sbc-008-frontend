import './style.css';
import Logo from '../../assets/brand/logo.png';

export const Signup = () => {
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
                        <input type='text' className='signup--form--item--input' />
                    </div>

                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label'>Sobrenome</div>
                        <input type='text' className='signup--form--item--input' />
                    </div>

                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label'>Sexo</div>
                        <input type='text' className='signup--form--item--input' />
                    </div>

                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label'>Documento de Identidade</div>
                        <input type='text' className='signup--form--item--input' />
                    </div>

                    <div className='signup--form--item'>
                        <div className='signup--form--item--label label'>Profissão</div>
                        <input type='text' className='signup--form--item--input' />
                    </div>
                </div>
            </div>

            <div className='signup--footer'>
                <div className='signup--footer--terms text-body'>Aceito os termos de serviço</div>
                <div className='signup--footer--submit button'>Criar cadastro</div>
            </div>
        </div>
    )
    };

