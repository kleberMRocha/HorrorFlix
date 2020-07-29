import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import styled from 'styled-components';


const AppWrapper= styled.div`background:var(--blue);`;
function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Maud (Morfydd Clark) é uma jovem enfermeira religiosa que se torna perigosamente obcecada em salvar a alma de sua glamourosa paciente Amanda (Jennifer Ehle)."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
