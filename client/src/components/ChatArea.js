import React from 'react';
import StyledChatArea from '../styles/ChatArea';
import TabBar from '../containers/TabBar';
import JoinRoom from '../containers/JoinRoom';
import Messages from '../containers/Messages';
import SendMessage from '../containers/SendMessage';

const ChatArea = ({inRoom}) => {

  return (
    <StyledChatArea>
      <TabBar />
      {inRoom?
        <Messages />:
        <JoinRoom />}
      <SendMessage />
    </StyledChatArea>
  )
}

export default ChatArea;
