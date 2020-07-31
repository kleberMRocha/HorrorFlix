import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageDefault } from '../../components/PageDefault';
import FormField from '../../components/FormField';
import './style.css';
import Button from '../../components/buttons';

export function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategoria] = useState([{ nome: 'teste' }]);

  function setValue(key, value) { setValues({ ...values, [key]: value }); }

  function handleChange(event) {
    const chave = event.currentTarget.getAttribute('name');
    const { value } = event.currentTarget;
    setValue(chave, value);
  }

  return (
    <div>

      <PageDefault>

        <div className="wrapper">
          <h2 className="titulo">
            Cadatro Categoria :
            {' '}
            {values.nome}
          </h2>
          <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            setCategoria([...categorias, values]);
            setValues(valoresIniciais);
          }}
          >

            <FormField
              className="inputCat"
              label="Nome da Categoria"
              name="nome"
              type="text"
              value={values.nome}
              onChange={handleChange}
            />
            <FormField
              className="inputCat"
              label="Descricao"
              name="descricao"
              type="textarea"
              value={values.descricao}
              onChange={handleChange}
            />
            <FormField
              className="inputCat"
              label="Cor"
              name="cor"
              type="color"
              value={values.cor}
              onChange={handleChange}
            />

            <Button type="submit" className="btnSend">
              Enviar
            </Button>
          </form>

          <ul>
            {categorias.map((categoria, index) => <li key={`${categoria},${index}`}>{categoria.nome}</li>)}
          </ul>

          <Link to="/cadastro/videos">
            Cadastrar video
          </Link>
        </div>
      </PageDefault>
    </div>

  );
}
export default CadastroCategoria;
