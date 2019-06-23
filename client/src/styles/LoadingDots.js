import styled from 'styled-components';

export default styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 8px;
  div {
    margin: auto 5px;
    width: 9px;
    height: 9px;
    background-color: #34495e;
    border-radius: 100%;
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
