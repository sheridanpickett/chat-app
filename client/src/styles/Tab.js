import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: inline-block;
  background-color: rgba(0,0,20,0.04);
  max-width: 100px;
  border-right: 1px solid rgb(52,73,94, 0.3);
  overflow: hidden;
  .is-active {
    color: #44a6c6
  }
  :hover {
    background-color: rgba(0,0,20,0.1);
  }
  :active {
    background-color: rgba(0,0,20,0.04);
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    color: white;
    background-color: #34495e;
    border: 1px solid #34495e;
    font-size: .9em;
    border-radius: 0 0 0 4px;
    :hover {
      background-color: #425ff4;
    }
    :active{
      background-color: #34495e;
    }
  }
  div {
    padding: 5px;
    white-space: nowrap;
  }
  span span {
    padding: 5px;
    font-size: 1.5em;
    line-height: 1em 
  }
`
