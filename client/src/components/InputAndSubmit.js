import React from 'react';
import styled from 'styled-components';
import { updateName } from '../actions';

const StyledInputAndSubmit = styled.form`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 8px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.06), 0 1px 1px rgba(255,255,255,0.2);
  input {
    width: 100%;
    padding: 0 10px;
    font-size: 1em;
    background-color: rgba(255,255,255,.5);
    border-radius: 4px 0px 0px 4px;
    border: 1px solid rgba(0,0,0,0.16);
    border-right: none;
  }
  button {
		height: 100%;
    width: 70px;
		background-color: #34495e;
    border: 1px solid #34495e;
    font-size: .9em;
    border-radius: 0px 4px 4px 0px;
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

class InputAndSubmit extends React.Component {

  state = {
    value: ''
  }

  setValue = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <StyledInputAndSubmit>
        <input type="text" placeholder={this.props.placeholder} value={this.state.value} onChange={this.setValue} />
        <button onClick={this.props.onClick} >
          <span>{this.props.buttonText}</span>
        </button>
      </StyledInputAndSubmit>
    )
  }
}

export default InputAndSubmit;
