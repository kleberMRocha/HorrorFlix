import React from 'react';
import logo  from '../../assets/img/logo.png';
import './menu.css'
import Button from '../buttons/'


function Menu(){
    
    return(
    <nav className="Menu">
      <a href="/">
        <img  className="Logo" alt="logo HorrorFlix" src={logo}></img>
      </a> 
      <Button as="a" href="/" className="ButtonLink">Novo Vídeo</Button>
    </nav>
    );

}

export default Menu;