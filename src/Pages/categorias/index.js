import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageDefault } from '../../components/PageDefault';
import FormField from '../../components/FormField';
import './style.css';
import Button from '../../components/buttons';
import useForm from '../../hooks/useForm';

export function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategoria] = useState([{ nome: '' }]);

  // ============
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategoria(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <>

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
            clearForm(valoresIniciais);
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
            {categorias.map((categoria) => <li key={`${categoria}`}>{categoria.nome}</li>)}
          </ul>

          <Link to="/cadastro/videos">
            Cadastrar video
          </Link>
        </div>
      </PageDefault>
    </>

  );
}
export default CadastroCategoria;
