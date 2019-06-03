import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  ${props => props.isActive && `
    background-color: blue;
    color: white;
  `}
`
const Tab = ({room, deleteAndUpdate, update, isActive}) => {
  return (
    <StyledTab isActive={isActive} >
      <span  onClick={update}>
        {room}
      </span>
      <button onClick={deleteAndUpdate}/>
    </StyledTab>
  )
}

export default Tab;
