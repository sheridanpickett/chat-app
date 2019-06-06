import { connect } from 'react-redux';
import Messages from '../components/Messages';

const mapState = state => {
  const room = state.rooms[state.activeRoom];
  return {
    user: state.user,
    messages: state.roomInfo[room].messages
  }
}

export default connect(mapState)(Messages)
