import React from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  width: 20%;
  background-color: rgba(0,0,20,0.04);
  border-right: 1px solid rgb(52,73,94, 0.3);
`

const SideBar = props => <StyledSideBar>{props.children}</StyledSideBar>

export default SideBar
