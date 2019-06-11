import React from 'react';
import styled from 'styled-components';
import socket from '../connectSocket';
import InputAndSubmit from './InputAndSubmit';

const StyledJoinRoom = styled.div`

`

const JoinRoom = ({rooms, user, addRoom, updateActiveRoom, updateRoom}) => {
  const joinRoom = room => {
    socket.emit('join room', room, user);
    if(rooms.length<1) {
      addRoom();
      updateActiveRoom(0);
    }
    updateRoom(room);
  }

  return (
    <StyledJoinRoom>
      <InputAndSubmit
        placeholder="Join Room"
        buttonText="Join"
        onClick={joinRoom}
      />
    </StyledJoinRoom>
  )
}

export default JoinRoom;
