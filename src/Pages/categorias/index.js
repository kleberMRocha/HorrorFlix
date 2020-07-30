import React, {useState} from 'react';
import {PageDefault} from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import {FormField} from '../../components/FormField';


export function CadastroCategoria(){

  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:''
  }

  const [values,setValues] = useState(valoresIniciais);
  const [categoria,setCategoria] = useState([{"nome":'teste'}]);
  
  function setValue(key,value){setValues({...values,[key]:value,})}

  function handleChange(event){
    let chave = event.currentTarget.getAttribute('name');
    let value = event.currentTarget.value;
    setValue(chave,value);
  }
  

  return(
    <div>
      <PageDefault>
      Cadatro Categoria : {values.nome}
      <form  onSubmit={function handleSubmit(event){
        event.preventDefault();
        setCategoria([...categoria,values]);
        setValues(valoresIniciais);
      }}>

  

        <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />
         <FormField
          label="Descricao"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />
         <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />

        <button type="submit">
          Enviar
        </button>
      </form>

        <ul>
        {categoria.map((categoria,index)=>{
          return <li key={`${categoria},${index}`}>{categoria.nome}</li>
        })}
        </ul>

      <Link to="/cadastro/videos">
        Cadastrar video
      </Link>
      </PageDefault>
    </div>

  ) 
  
}

