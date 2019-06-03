import React from 'react';
import Tab from './Tab';
import styled from 'styled-components';

const StyledTabBar = styled.div`
  display: flex;
  height: 60px;
`

const TabBar = ({rooms, activeRoom, updateActiveRoom, deleteRoom}) => {

  const deleteAndUpdate = (index, rooms, activeRoom) => {
    if(index == activeRoom.index) {
      if(rooms.length == 1) {
        updateActiveRoom('', '')
      } else if(index == rooms.length-1) {
        updateActiveRoom(rooms[index-1], index-1)
      } else {
        updateActiveRoom(rooms[index+1], index)
      }
      deleteRoom(index);
    } else {
      if(index < activeRoom.index){
        updateActiveRoom(activeRoom.room, activeRoom.index-1)
      }
      deleteRoom(index);
    }
  }

  const roomTabs = rooms.map((room, index) => {
      return (
        <Tab
          room={room}
          isActive={index==activeRoom.index}
          deleteAndUpdate={()=>deleteAndUpdate(index, rooms, activeRoom)}
          update={()=>updateActiveRoom(room, index)}
        />
      )
    }
  )
  return <StyledTabBar>{roomTabs}</StyledTabBar>
}

export default TabBar;
