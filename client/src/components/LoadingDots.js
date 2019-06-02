import React from 'react';
import styled from 'styled-components';

const StyledLoadingDots = styled.div`
  margin: 50px auto 0;
  text-align: center;
  span {
    display: inline-block;
    color: #34495e;
    margin-bottom: 8px;
  }
  div {
    width: 18px;
    height: 18px;
    margin: 5px;
    background-color: #34495e;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease both;
    animation: sk-bouncedelay 1.4s infinite ease both;
  }
  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  @-webkit-keyframes sk-bouncedelay {
    0%, 100% { -webkit-transform: scale(0) }
    50% { -webkit-transform: scale(1.0) }
  }
  @keyframes sk-bouncedelay {
    0%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 50% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
`

const LoadingDots = props => {
  return(
    <StyledLoadingDots>
      <span><i>{props.text}</i></span> <br />
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </StyledLoadingDots>
  )
}

export default LoadingDots
