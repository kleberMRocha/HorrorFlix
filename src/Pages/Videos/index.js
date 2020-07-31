import React from 'react';
import { Link } from 'react-router-dom';
import { PageDefault } from '../../components/PageDefault';

export function CadastroVideo() {
  return (
    <div>
      <PageDefault>
        Cadatro Video
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </div>

  );
}

export default CadastroVideo;
