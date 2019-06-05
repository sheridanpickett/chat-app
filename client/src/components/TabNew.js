import React from 'react';
import styled from 'styled-components';

const StyledTabNew = styled.div`
  width: 70px;
  text-align: center;
  font-size: 2em;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`
const TabNew = ({newTab}) => {
  return(
    <StyledTabNew onClick={newTab}>
      <span>+</span>
    </StyledTabNew>
  )
}

export default TabNew;
