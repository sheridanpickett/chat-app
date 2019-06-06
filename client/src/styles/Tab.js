import styled from 'styled-components';

export default styled.div`
  width: 70px;
  padding: 5px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  ${props => props.isActive && `
    background-color: blue;
    color: white;
  `}
`
