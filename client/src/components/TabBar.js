import React from 'react';
import styled from 'styled-components';
import { generate } from 'shortid';
import Tab from './Tab';
import TabNew from './TabNew';

const StyledTabBar = styled.div`
  display: flex;
  height: 60px;
`

const TabBar = ({rooms, activeRoom, updateActiveRoom, addRoom, deleteRoom}) => {

  const roomTabs = rooms.map((room, index) => {
      return (
        <Tab
          key={generate()}
          room={room}
          isActive={index===activeRoom}
          deleteAndUpdate={()=>deleteAndUpdate(index, rooms, activeRoom)}
          update={()=>updateActiveRoom(index)}
        />
      )})

  const deleteAndUpdate = (index, rooms, activeRoom) => {
    if(index===activeRoom) {
      if(rooms.length===1) {
        updateActiveRoom(null)
      } else if(index===rooms.length-1) {
        updateActiveRoom(index-1)
      } else {
        updateActiveRoom(index)
      }
      deleteRoom(index);
    } else {
      if(index < activeRoom){
        updateActiveRoom(activeRoom-1)
      }
      deleteRoom(index);
    }
  }

  return(
    <StyledTabBar>
      {roomTabs}
      <TabNew
        newTab={()=>{
          addRoom();
          updateActiveRoom(rooms.length)
        }}
      />
    </StyledTabBar>
  )
}

export default TabBar;
