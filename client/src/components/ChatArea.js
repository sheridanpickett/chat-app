import React from 'react';
import StyledChatArea from '../styles/ChatArea';
import TabBar from '../containers/TabBar';
import JoinRoom from '../containers/JoinRoom';
import Messages from '../containers/Messages';
import SendMessage from '../containers/SendMessage';

export default ({inRoom, activeRoom, rooms}) => {

  return (
    <StyledChatArea>
      <TabBar />
      {inRoom?
        <Messages />:
        <JoinRoom />}
      {rooms[activeRoom]&&<SendMessage />}
    </StyledChatArea>
  )
}
