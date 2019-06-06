import { connect } from 'react-redux';
import { addMessage, updateUser } from '../actions';
import App from '../App.js';

const mapState = state => {
  const title = state.activeRoom===null ? 'Chat App' : state.rooms[state.activeRoom];
  return {
    title,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    addMessage: (room, msg, user) => dispatch(addMessage(room, msg, user)),
  }
}

export default connect(mapState, mapDispatch)(App)
