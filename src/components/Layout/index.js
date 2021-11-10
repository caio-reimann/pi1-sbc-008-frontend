import './style.css';
import Logo from '../../assets/brand/logo.png';
import { MdLogout, MdHome } from 'react-icons/md';
import {Link} from 'react-router-dom';

export const Layout = ({children}) => {
    return (
        <div className='layout'>
            <div className='layout--navbar'>
                <div className='layout--navbar--logo'>
                    <div className='layout--navbar--logo--img' style={{backgroundImage: `url(${Logo})`}}></div>
                    <div className='layout--navbar--logo--text'>Orça Fácil</div>
                </div>

                <div className='layout--navbar--search'>
                    <input type='search' placeholder='Digite algo aqui para pesquisar' />
                </div>

                <div className='layout--navbar--logout'>
                    Sair
                    <MdLogout />
                </div>
            </div>

            <div className='layout--menu'>
                <Link to={''}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Início
                    </div>
                </Link>

                <Link to={''}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Orçamentos
                    </div>
                </Link>

                <Link to={''}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Serviços
                    </div>
                </Link>

                <Link to={''}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Clientes
                    </div>
                </Link>

                <div className='layout--menu--item--subitem'>
                    <div className='text-body uppercase'>RELATÓRIOS</div>
                </div>

                <Link to={''}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Mês atual
                    </div>
                </Link>

                <Link to={''}>
                    <div className='layout--menu--item'>
                        <MdHome />
                        Relatório anual
                    </div>
                </Link>
            </div>

            <div className='layout--content'>
                {children}
            </div>
        </div>
    )
};

