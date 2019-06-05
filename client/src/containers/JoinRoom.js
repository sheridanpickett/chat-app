import { connect } from 'react-redux';
import { addRoom, updateRoom, updateActiveRoom } from '../actions';
import JoinRoom from '../components/JoinRoom';

const mapState = state => {
  return {
    rooms: state.rooms,
  }
}

const mapDispatch = dispatch => {
  return {
    updateRoom: room => dispatch(updateRoom(room)),
    addRoom: () => dispatch(addRoom()),
    updateActiveRoom: index => dispatch(updateActiveRoom(index))
  }
}

export default connect(mapState, mapDispatch)(JoinRoom);
