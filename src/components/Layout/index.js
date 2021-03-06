import './style.css';
import Logo from '../../assets/brand/logo.png';
import { MdLogout } from 'react-icons/md';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import React from 'react';

export const Layout = ({children}) => {
    const navigate = useNavigate();
    let location = useLocation();
    let [params, setParams] = React.useState(new URLSearchParams(location.search));
    let token = params.get('token');

    const handleLogout = () => {
        navigate('/login', { replace: true });
    };

    return (
        <div className='layout'>
            <div className='layout--navbar'>

                <Link to={`/app?token=${token}`}>
                    <div className='layout--navbar--logo'>
                        <div className='layout--navbar--logo--img' style={{backgroundImage: `url(${Logo})`}}></div>
                        <div className='layout--navbar--logo--text'>Orça Fácil</div>
                    </div>
                </Link>

                <div className='layout--navbar--logout' onClick={handleLogout}>
                    Sair
                    <MdLogout />
                </div>
            </div>

            {/* <div className='layout--menu'>
                <Link to={'/app'}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Início
                    </div>
                </Link>

                <Link to={'/orcamentos'}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Orçamentos
                    </div>
                </Link>

                <Link to={'/servicos'}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Serviços
                    </div>
                </Link>

                <Link to={'/clientes'}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Clientes
                    </div>
                </Link>

                <div className='layout--menu--item--subitem'>
                    <div className='text-body uppercase'>RELATÓRIOS</div>
                </div>

                <Link to={'/relatorio/mensal'}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Mês atual
                    </div>
                </Link>

                <Link to={'/relatorio/anual'}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Relatório anual
                    </div>
                </Link>
            </div> */}

            <div className='layout--content'>
                {children}
            </div>
        </div>
    )
};

