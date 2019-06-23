import React,{ useEffect } from 'react';
import socket from '../connectSocket';
import StyledTab from '../styles/Tab'

export default ({index, room, user, rooms, activeRoom, newMessage,
  updateActiveRoom, deleteRoom, deleteRoomInfo, setRoomNewMessage}) => {

  const leaveRoom =  e => {
    if(index===activeRoom) {
      if(rooms.length===1) {
        updateActiveRoom(null);
      } else if(index===rooms.length-1) {
        updateActiveRoom(index-1);
      } else {
        updateActiveRoom(index);
      }
      deleteRoom(index);
    } else {
      if(index < activeRoom) {
        updateActiveRoom(activeRoom-1)
      }
      deleteRoom(index);
    }
    const newRooms = rooms.slice();
    newRooms.splice(index, 1);
    if(!newRooms.includes(room)) {
      if(room!=='') {
        deleteRoomInfo(room);
        socket.emit('leave room', room, user)
      }
    }
    e.stopPropagation();
  }

  useEffect(()=>{
    setRoomNewMessage(rooms[activeRoom], false);
  },[activeRoom, rooms])

  return (
    <StyledTab onClick={()=> updateActiveRoom(index)}>
      <span>
        <button onClick={leaveRoom}>x</button>
        {newMessage && <span style={{color: 'red'}}>.</span>}
          </span>
          <br />
      <div className={index===activeRoom&&'is-active'}>{room ? room : 'New Room'}</div>
    </StyledTab>
  )
}
