import React from 'react';
import socket from '../connectSocket';
import getDateTime from '../getDateTime';
import InputAndSubmit from './InputAndSubmit';
import StyledSendMessage from '../styles/SendMessage';

export default ({room, user}) => {
  const sendMessage = msg => {
    let userName = user.name;
    let dateTime = getDateTime();
    socket.emit('chat message', {room, msg, userName, dateTime})
  }
  return (
    <StyledSendMessage>
      <InputAndSubmit
        placeholder="Write a message.."
        buttonText="Send"
        onClick={sendMessage}
      />
    </StyledSendMessage>
  )
}
