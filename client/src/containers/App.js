import { connect } from 'react-redux';
import { addMessage, addUserToRoom, removeUserFromRoom } from '../actions';
import App from '../App.js';

const mapState = state => {
  const title = state.activeRoom===null ? 'Chat App' : state.rooms[state.activeRoom];
  return {
    title,
    user: state.user,
    rooms: state.rooms
  }
}

const mapDispatch = dispatch => {
  return {
    addMessage: (room, msg, user) => dispatch(addMessage(room, msg, user)),
    addUserToRoom: (room, user) => dispatch(addUserToRoom(room, user)),
    removeUserFromRoom: (room, user) => dispatch(removeUserFromRoom(room, user))
  }
}

export default connect(mapState, mapDispatch)(App)
