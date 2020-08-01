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

  console.log(categorias);

  return (
    <div>
      <PageDefault>
        Cadatro Video

        <form onSubmit={(event) => {
          event.preventDefault();
          const categoriaId = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

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
          />
          <Button type="submit" className="btnSend">
            Cadastrar
          </Button>

        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </div>

  );
}

export default CadastroVideo;
