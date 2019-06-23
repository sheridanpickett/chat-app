import React from 'react';
import InputAndSubmit from './InputAndSubmit';
import StyledEnterName from '../styles/EnterName';

export default ({updateUser, user}) => {
  return (
    <StyledEnterName>
      Enter your name to get started
      <InputAndSubmit
        placeholder="Enter your name"
        buttonText="Submit"
        onClick={name => updateUser({...user, name})}
      />
    </StyledEnterName>
  )
}
