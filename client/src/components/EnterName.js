import React from 'react';
import socket from '../connectSocket';
import InputAndSubmit from './InputAndSubmit';

const EnterName = ({updateUser}) => {
  return (
    <div>
      Enter your name to get started
      <InputAndSubmit
        placeholder="Enter your name"
        buttonText="Submit"
        onClick={name => updateUser({name, id: socket.id})}
      />
    </div>
  )
}

export default EnterName
