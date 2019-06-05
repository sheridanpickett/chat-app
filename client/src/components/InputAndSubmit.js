import React, { useState } from 'react';
import StyledInputAndSubmit from '../styles/InputAndSubmit';

const InputAndSubmit = ({placeholder, buttonText, onClick}) => {
  const [value, setValue] = useState('');

  return (
    <StyledInputAndSubmit>
      <input type="text" placeholder={placeholder} value={value} onChange={e=>setValue(e.target.value)} />
      <button onClick={e=>{
        e.preventDefault();
        if(value!=='') {
          onClick(value);
          setValue('')
        }
      }}>
        <span>{buttonText}</span>
      </button>
    </StyledInputAndSubmit>
  )
}

export default InputAndSubmit;
