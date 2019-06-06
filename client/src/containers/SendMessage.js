import { connect } from 'react-redux';
import SendMessage from '../components/SendMessage';

const mapState = state => {
  const room = state.rooms[state.activeRoom];
  return {
    room,
    user: state.user
  }
}

export default connect(mapState)(SendMessage);
