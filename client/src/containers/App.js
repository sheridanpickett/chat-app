import { connect } from 'react-redux';
import { addMessage, addMessages, addUserToRoom, removeUserFromRoom, setRoomLoading, setRoomNewMessage } from '../actions';
import App from '../App.js';

const mapState = state => {
  const title = state.rooms[state.activeRoom] || 'Chat App';
  return {
    title,
    user: state.user,
    rooms: state.rooms,
    activeRoom: state.activeRoom,
    roomInfo: state.roomInfo
  }
}

const mapDispatch = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  addMessages: (room, messages) => dispatch(addMessages(room, messages)),
  addUserToRoom: (room, user) => dispatch(addUserToRoom(room, user)),
  removeUserFromRoom: (room, user) => dispatch(removeUserFromRoom(room, user)),
  setRoomLoading: (room, isLoading) => dispatch(setRoomLoading(room, isLoading)),
  setRoomNewMessage: (room, newMessage) => dispatch(setRoomNewMessage(room, newMessage))
})

export default connect(mapState, mapDispatch)(App)
