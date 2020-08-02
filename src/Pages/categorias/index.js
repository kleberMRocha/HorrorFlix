import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageDefault } from '../../components/PageDefault';
import FormField from '../../components/FormField';
import './style.css';
import Button from '../../components/buttons';
import useForm from '../../hooks/useForm';
import Categorys from '../../repositories/categorias';

export function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#ffa464',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setValue] = useState([]);

  // ============
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setValue(resposta);
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
            {values.titulo}
          </h2>
          <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            Categorys.create(values)
              .then(async (value) => {
                clearForm();
                setValue([...categorias, value]);
              });
          }}
          >

            <FormField
              className="inputCat"
              label="Nome da Categoria"
              name="titulo"
              type="text"
              value={values.titulo}
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
              Cadastrar
            </Button>
          </form>

          <table className="tableCategory">
            <thead>
              <tr>
                <th key="Categoria">Categoria</th>
                <th key="Descricao">Descricao</th>
                <th key="Cor">Cor</th>
              </tr>
            </thead>
            {
              categorias.map((categoria) => (
                <>
                  <tbody>
                    <tr key={`id_${categoria.id}`}>
                      <td key={`id_${categoria.id}_${categoria.titulo}`}>{categoria.titulo}</td>
                      <td key={`id_${categoria.id}_${categoria.descricao}`}>{categoria.descricao}</td>
                      <td style={{ backgroundColor: categoria.cor }} key={`id_${categoria.id}__${categoria.cor}`}>{categoria.cor}</td>
                    </tr>
                  </tbody>
                </>
              ))
            }
            <tfoot><></></tfoot>
          </table>

          <Link className="linkPage" to="/cadastro/videos">
            Cadastrar video
          </Link>
        </div>
      </PageDefault>
    </>

  );
}
export default CadastroCategoria;
