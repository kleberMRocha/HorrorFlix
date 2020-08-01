import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  function setValue(key, value) { setValues({ ...values, [key]: value }); }

  function handleChange(event) {
    const chave = event.currentTarget.getAttribute('name');
    const { value } = event.currentTarget;
    setValue(chave, value);
  }
  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,

  };
}

export default useForm;
