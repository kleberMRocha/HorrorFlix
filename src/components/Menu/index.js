import React from 'react';
import {Link} from 'react-router-dom';
import logo  from '../../assets/img/logo.png';
import './menu.css'
import Button from '../buttons/'


function Menu(){
    
    return(
    <nav className="Menu">
   
      <Link  to="/" >
        <img  className="Logo" alt="logo HorrorFlix" src={logo}></img>
      </Link> 
    
      <Button href="/#" as={Link} to="/cadastro/videos" className="ButtonLink">Novo Vídeo</Button>
    </nav>
    );

}

export default Menu;