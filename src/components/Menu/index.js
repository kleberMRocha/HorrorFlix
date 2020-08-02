import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../buttons';

function Menu() {
  return (
    <nav className="Menu">

      <Link to="/">
        <img className="Logo" alt="logo HorrorFlix" src={logo} />
      </Link>
      <div>
        <Button href="/#" as={Link} to="/cadastro/videos" className="ButtonLink one">Novo Vídeo</Button>
        <Button href="/#" as={Link} to="/cadastro/categoria" className="ButtonLink two">Nova Categoria</Button>
      </div>
    </nav>
  );
}

export default Menu;
