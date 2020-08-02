import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

const AppWrapper = styled.div`background:var(--dark);`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWhithVideos()
      .then((categoriaVideos) => {
        setDadosIniciais(categoriaVideos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (

    <AppWrapper>
      <PageDefault paddingAll={0}>

        {dadosIniciais.length === 0 && (<div> Loading ...</div>
        )}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].descricao}
                />

                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }
          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

      </PageDefault>

    </AppWrapper>
  );
}

export default Home;
