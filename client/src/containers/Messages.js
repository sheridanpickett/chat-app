import { connect } from 'react-redux';
import Messages from '../components/Messages';

const mapState = state => {
  const room = state.rooms[state.activeRoom];
  return {
    messages: state.messages[room]
  }
}

export default connect(mapState)(Messages)
