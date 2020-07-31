import React from 'react';
import { Animated } from 'react-animated-css';
import Logo404 from '../../assets/img/404.png';
import { Pagenotfound, Img404 } from './styles';
import { PageDefault } from '../../components/PageDefault';

function Page404() {
  return (
    <PageDefault>
      <Pagenotfound>

        <Animated animationIn="zoomIn" isVisible>

          <h1>404</h1>
          <h3>Página Não Encontrada!</h3>
          <Img404 src={Logo404} alt="Not found 404" />

        </Animated>

      </Pagenotfound>
    </PageDefault>

  );
}

export default Page404;
