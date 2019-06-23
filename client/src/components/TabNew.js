import React from 'react';
import StyledTabNew from '../styles/TabNew';

export default ({rooms, addRoom, updateActiveRoom}) => {
   const newTab = () => {
     addRoom();
     updateActiveRoom(rooms.length)
   }

  return(
    <StyledTabNew onClick={newTab}>
      <span>+</span>
    </StyledTabNew>
  )
}
