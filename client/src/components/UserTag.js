import React from 'react';
import styled from 'styled-components'

const StyledUserTag = styled.div`
  background-color: #34495e;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
  :hover {
    background-color: white;
    color: #34495e;
  }
  :active{
    background-color: #34495e;
    color: white;
  }
`

const UserTag = props => {
  return(
    <StyledUserTag>
      {props.name}
    </StyledUserTag>
  )
}

export default UserTag;
