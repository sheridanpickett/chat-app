import React from 'react';
import { generate } from 'shortid';

const Messages = ({messages, user}) => {
  const displayMessages = messages => {
    return messages.map(message => {
      return (
        <div key={generate()}>
          {message.user.name}: {message.msg}
        </div>
      )
    })
  }

  return <div>{displayMessages(messages)}</div>
}

export default Messages;
