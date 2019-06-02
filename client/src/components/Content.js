import React from 'react';
import  styled from 'styled-components';

const StyledContent = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  width: 80%;
`

const Content = props => <StyledContent>{props.children}</StyledContent>

export default Content;
