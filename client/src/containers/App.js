import { connect } from 'react-redux';
import { addMessage } from '../actions';
import App from '../App.js';

const mapState = state => {
  const title = state.activeRoom===null ? 'Chat App' : state.rooms[state.activeRoom];
  return {
    title,
  }
}

const mapDispatch = dispatch => {
  return {
    addMessage: (room, msg) => dispatch(addMessage(room, msg))
  }
}

export default connect(mapState, mapDispatch)(App)
