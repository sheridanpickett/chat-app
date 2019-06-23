import { connect } from 'react-redux';
import React from 'react';
import UsersInRoom from '../components/UsersInRoom';

const mapState = state => {
  const room = state.rooms[state.activeRoom]
  if(state.roomInfo[room] && room!=='') {
    let users = state.roomInfo[state.rooms[state.activeRoom]].users
    return {
      users: users.map(user => <div>{user.name}</div>)
    }
  } else {
    return {}
  }
}

export default connect(mapState)(UsersInRoom)
