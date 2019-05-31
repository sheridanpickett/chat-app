import React from 'react';
import styled from 'styled-components';

const StyledInputAndSubmitField = styled.form`
  display: flex;
  height: 50px;
  width: 270px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 1px 2px black;
  overflow: hidden;
  input {
    border: none;
    height: 100%
    width: 200px;
    padding: 0 10px;
    font-size: 1em;
  }
  button {
    display: flex;
		height: 100%;
    width: 70px;
		background-color: #34495e;
    border: none;
    font-size: 1em;
    :hover {
      background-color: #425ff4;
    }
    :active{
      background-color: #34495e;
    }
    span{
      text-align: center;
      margin: auto;
      color: white;
      padding: 0 5px;
    }
  }
`

const InputAndSubmitField = props => {
  return(
    <StyledInputAndSubmitField>
      <input type="text" placeholder={props.placeholder} onChange={props.onChange} />
      <button onClick={props.onClick} >
        <span>Send</span>
      </button>
    </StyledInputAndSubmitField>
  )
}

export default InputAndSubmitField;
