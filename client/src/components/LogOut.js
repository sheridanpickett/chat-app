import React from 'react';
import socket from '../connectSocket';
import StyledLogOut from '../styles/LogOut';

export default ({user, rooms, updateUser, deleteRoomInfo}) => {
  return (
    <StyledLogOut onClick={()=>{
      rooms.forEach(room => {
        socket.emit('leave room', room)
      })
      updateUser({...user, name: ''});
    }}>Log out</StyledLogOut>
  )
}
