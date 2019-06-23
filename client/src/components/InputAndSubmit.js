import React, { useState } from 'react';
import StyledInputAndSubmit from '../styles/InputAndSubmit';

export default ({placeholder, buttonText, onClick}) => {
  const [value, setValue] = useState('');

  const submitFunction = e => {
    e.preventDefault();
    if(value!=='') {
      onClick(value);
      setValue('')
    }
  }

  return (
    <StyledInputAndSubmit>
      <input type="text" placeholder={placeholder} value={value} onChange={e=>setValue(e.target.value)} />
      <button onClick={submitFunction}>
        <span>{buttonText}</span>
      </button>
    </StyledInputAndSubmit>
  )
}
