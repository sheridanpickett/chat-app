import React from 'react';
import socket from '../connectSocket';
import StyledTab from '../styles/Tab'

const Tab = ({index, room, user, rooms, activeRoom, updateActiveRoom, deleteRoom, deleteRoomInfo}) => {

  const leaveRoom =  () => {
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
  }

  return (
    <StyledTab isActive={index===activeRoom} >
      <span onClick={() => updateActiveRoom(index)}>{room? room : 'New Room'}</span>
      <button onClick={leaveRoom} />
    </StyledTab>
  )
}

export default Tab;
