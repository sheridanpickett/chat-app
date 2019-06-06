import React from 'react';
import socket from '../connectSocket';
import InputAndSubmit from './InputAndSubmit';

const SendMessage = ({room, user}) => {
  const sendMessage = msg => {
    socket.emit('chat message', room, msg, user)
  }
  return (
    <div>
      <InputAndSubmit
        placeholder="Write a message.."
        buttonText="Send"
        onClick={sendMessage}
      />
    </div>
  )
}

export default SendMessage;
