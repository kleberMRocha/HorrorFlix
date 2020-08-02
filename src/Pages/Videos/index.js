import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageDefault } from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/buttons';
import './style.css';
import videoRepository from '../../repositories/videos';
import categoryRepository from '../../repositories/categorias';

export function CadastroVideo() {
  const history = useHistory();
  const [categorias, setDadosIniciais] = useState([]);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoryRepository
      .getAll()
      .then((result) => {
        setDadosIniciais(result);
      });
  }, []);

  const suggestions = [];

  categorias.forEach((suggestion) => {
    suggestions.push(suggestion.titulo);
  });

  return (
    <div>
      <PageDefault>
        <div className="wrapper">
          <h2 className="titulo">Cadatro Videos </h2>

          <form onSubmit={(event) => {
            event.preventDefault();
            const categoriaId = categorias.find((categoria) => categoria.titulo === values.categoria);
            videoRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoria: values.categoria,
              categoriaId: categoriaId.id,
            }).then(() => {
              history.push('/');
            });
          }}
          >
            <FormField
              className="inputCat"
              label="Titulo"
              name="titulo"
              type="text"
              value={values.titulo}
              onChange={handleChange}
            />
            <FormField
              className="inputCat"
              label="URL"
              name="url"
              type="text"
              value={values.url}
              onChange={handleChange}
            />
            <FormField
              className="categoria"
              label="categoria"
              name="categoria"
              type="text"
              value={values.categoria}
              onChange={handleChange}
              suggestions={suggestions}
            />
            <Button type="submit" className="btnSend">
              Cadastrar
            </Button>

          </form>

          <Link className="linkPage" to="/cadastro/categoria">
            Cadastrar Categoria
          </Link>

        </div>

      </PageDefault>
    </div>

  );
}

export default CadastroVideo;
