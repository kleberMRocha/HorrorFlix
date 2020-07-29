import React from 'react';
import {PageDefault} from '../../components/PageDefault';
import { Link } from 'react-router-dom';


export function CadastroCategoria(){
  return(
    <div>
      <PageDefault>
      Cadatro Video
      <Link to="/cadastro/videos">
        Cadastrar video
      </Link>
      </PageDefault>
    </div>

  ) 
  
}

