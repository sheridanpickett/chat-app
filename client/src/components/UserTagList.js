import React from 'react';
import styled from 'styled-components';
import UserTag from './UserTag';

const StyledUserTagList = styled.div`
  border-radius: 5px;
  width: 20%;
  text-align: center;
  overflow: scroll;
  h1 {
    background-color: white;
    color: #34495e;
    border-radius: 5px;
    padding: 5px;
    margin: 2px;
  }
`
const UserTagList = props => {
  let userTagList = props.userList.map(user => {
    return <UserTag onClick={() => this.joinRoom(user.socketID)} name={user.name} />
  })
  return (
    <StyledUserTagList>
      <h1>Nearby Users</h1>
      {userTagList}
    </StyledUserTagList>
  )
}

export default UserTagList;
