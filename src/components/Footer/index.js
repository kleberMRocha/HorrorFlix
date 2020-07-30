import React from 'react';
import { FooterBase,ImgFooter} from './styles';
import logo from '../../assets/img/logo.png';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
      <ImgFooter src={logo} alt="Canguruflix Logo" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
