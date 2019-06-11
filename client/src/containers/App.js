import { connect } from 'react-redux';
import { addMessage, addUserToRoom, removeUserFromRoom, updateUser } from '../actions';
import App from '../App.js';

const mapState = state => {
  const title = state.activeRoom ? state.rooms[state.activeRoom] : 'Chat App';
  return {
    title,
    user: state.user,
    rooms: state.rooms,
    activeRoom: state.activeRoom
  }
}

const mapDispatch = dispatch => {
  return {
    addMessage: (room, msg, user) => dispatch(addMessage(room, msg, user)),
    addUserToRoom: (room, user) => dispatch(addUserToRoom(room, user)),
    removeUserFromRoom: (room, user) => dispatch(removeUserFromRoom(room, user)),
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(mapState, mapDispatch)(App)
