import React from 'react';
import styled from 'styled-components';
import SplashPage from './SplashPage'

const StyledMain = styled.div`
  display: grid;
  grid-template-rows:  1fr;
  grid-template-columns: 100%;
  width: 80%;
`

const Main = props => {
  return (
    <StyledMain>
      <SplashPage />
    </StyledMain>
  )
}

export default Main;
