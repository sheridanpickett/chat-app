import React from 'react';
import InputAndSubmit from './InputAndSubmit';

const EnterName = ({updateUser, user}) => {
  return (
    <div>
      Enter your name to get started
      <InputAndSubmit
        placeholder="Enter your name"
        buttonText="Submit"
        onClick={name => updateUser({...user, name})}
      />
    </div>
  )
}

export default EnterName
