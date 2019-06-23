import { connect } from 'react-redux';
import Messages from '../components/Messages';
import React from 'react';

const mapState = state => {
  const room = state.rooms[state.activeRoom];
  const loading = state.roomInfo[room].loading;
  let dateInt = null;
  if(state.roomInfo[room].messages[0]) {
    dateInt = state.roomInfo[room].messages[0].dateTime.dateInt;
  }
  const messages = state.roomInfo[room].messages
  return {
    loading,
    messages,
    room,
    dateInt
  }
}

export default connect(mapState)(Messages)
