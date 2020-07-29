import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/home/App';
import Page404 from './Pages/Page404'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {CadastroVideo} from '../src/Pages/Videos'
import {CadastroCategoria} from '../src/Pages/categorias'


ReactDOM.render(
  <BrowserRouter>
  <Switch>
     <Route path="/" component={App}  exact/>
     <Route path="/cadastro/videos" component={CadastroVideo} />
     <Route path="/cadastro/categoria" component={CadastroCategoria} />
     <Route  component={Page404} exact/>

  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

