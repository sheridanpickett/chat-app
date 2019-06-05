import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  width: 70px;
  padding: 5px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  ${props => props.isActive && `
    background-color: blue;
    color: white;
  `}
`
const Tab = ({room, deleteAndUpdate, update, isActive}) => {
  return (
    <StyledTab isActive={isActive} >
      {room?<span onClick={update}>{room}</span>:<span onClick={update}>New Room</span>}
      <button onClick={deleteAndUpdate}/>
    </StyledTab>
  )
}

export default Tab;
