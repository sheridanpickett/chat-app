import React from 'react';
import StyledSideBar from '../styles/SideBar';
import LogOut from '../containers/LogOut';
import UsersInRoom from '../containers/UsersInRoom';

export default ({user}) => {
  return (
    <StyledSideBar>
      {user.name&&
        <>
          <LogOut />
          <UsersInRoom />
        </>
      }
    </StyledSideBar>
  )
}
