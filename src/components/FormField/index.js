import React from 'react';


export function FormField({label,name,type,value,onChange}){
  
  if(type=="textarea"){
    return(
      <div>
          <label>{label}</label>
          <textarea name={name} value={value} onChange={onChange}/>
      </div>  
    );
  }else{
    return(
      <div>
          <label>{label}</label>
          <input 
          name={name} value={value} 
          type={type} onChange={onChange}
          />
      </div>  
    );

  }
    
}

