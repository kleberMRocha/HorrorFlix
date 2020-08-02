import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  function setValue(key, value) { setValues({ ...values, [key]: value }); }

  function handleChange(event) {
    const key = event.currentTarget.getAttribute('name');
    const { value } = event.currentTarget;
    setValue(key, value);
  }
  function clearForm() {
    values.titulo = '';
    values.descricao = '';
    values.cor = '#ffa464';
  }

  return {
    values,
    handleChange,
    clearForm,

  };
}

export default useForm;
