import React from 'react';
import UserTag from '../styles/UserTag.js'

export default props => {
  return(
    <StyledUserTag>
      {props.name}
    </StyledUserTag>
  )
}
