import React from 'react';
import { FooterBase,ImgFooter} from './styles';
import logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <ImgFooter src={logo} alt="Canguruflix Logo" />
      </a>
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
