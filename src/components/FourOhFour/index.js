import './style.css';
import React from 'react';
import FourOhFourSVG from '../../assets/images/404.svg';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';

export const FourOhFour = () => {
    return (
        <div className='fourohfour'>
            <div className='fourohfour--image' style={{backgroundImage: `url(${FourOhFourSVG})`}}></div>

            <h1 className='text-header'>Página não encontrada</h1>

            <h1 className='text-body'>
                Não encontramos a página solicitada, ela pode ter sido tirada do ar ou desativada, mas não se preocupe você pode voltar a página inicial clicando no botão abaixo ou acessar uma página específica através do menu lateral.
            </h1>

            <Link to='/'>
                <div className='button'>
                    <div>Página inicial</div>
                    <MdHome />
                </div>
            </Link>
        </div>
    )
}