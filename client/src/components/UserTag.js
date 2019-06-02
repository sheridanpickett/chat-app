import React from 'react';
import styled from 'styled-components'

const StyledUserTag = styled.div`
  border: 2px solid #34495e;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
  color: #34495e;
  :hover {
    background-color: #34495e;
    color: white;
  }
  :active{
    background-color: white;
    color: #34495e;
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
