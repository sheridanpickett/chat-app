import React from 'react';
import socket from '../connectSocket';
import InputAndSubmit from './InputAndSubmit';
import StyledJoinRoom from '../styles/JoinRoom';

export default ({rooms, user, addRoom, updateActiveRoom, updateRoom, setRoomLoading}) => {
  const joinRoom = room => {
    if(!rooms.includes(room) && room!==''){
      socket.emit('join room', room, user);
      socket.emit('get messages', room);
      if(rooms.length<1) {
        addRoom();
        updateActiveRoom(0);
      }
      updateRoom(room);
    }
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
