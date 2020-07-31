import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './Pages/home/App';
import Page404 from './Pages/Page404';
import { CadastroVideo } from './Pages/Videos';
import { CadastroCategoria } from './Pages/categorias';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/videos" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Page404} exact />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
