import React from 'react';
import {PageDefault} from '../../components/PageDefault';
import { Link } from 'react-router-dom';


export function CadastroVideo(){
  return(
    <div>
      <PageDefault>
      Cadatro Video
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
      </PageDefault>
    </div>

  ) 
  
}

