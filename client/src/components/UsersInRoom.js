import React from 'react';
import StyledUsersInRoom from '../styles/UsersInRoom';

export default ({users}) => {
  return (
    <StyledUsersInRoom>
      Users in room:
      {users}
    </StyledUsersInRoom>
  )
}
