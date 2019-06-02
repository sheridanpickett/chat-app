import React from 'react';
import styled from 'styled-components';
import InputAndSubmit from './InputAndSubmit';

const StyledSplashPage = styled.div`
  position: relative;
  text-align: center;
  > div {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    color: black;
    div {
      font-size: 1.5em;
      margin-bottom: 20px;
    }
  }
`

const SplashPage = props => {
  return (
    <StyledSplashPage>
      <div>
        <div>
          Create or Join a room <br />
          to get started
        </div>
        <InputAndSubmit
          placeholder="Enter a room name"
          buttonText="Join"
          onChange={props.onChange}
          onClick={props.onClick}
        />
      </div>
    </StyledSplashPage>
  )
}

export default SplashPage;
