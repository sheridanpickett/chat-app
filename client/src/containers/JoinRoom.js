import { connect } from 'react-redux';
import { addRoom, updateRoom, updateActiveRoom, setRoomLoading } from '../actions';
import JoinRoom from '../components/JoinRoom';

const mapState = state => ({
  rooms: state.rooms,
  user: state.user
})

const mapDispatch = dispatch => ({
  updateRoom: room => dispatch(updateRoom(room)),
  addRoom: () => dispatch(addRoom()),
  updateActiveRoom: index => dispatch(updateActiveRoom(index)),
  setRoomLoading: (room, isLoading) => dispatch(setRoomLoading(room, isLoading))
})

export default connect(mapState, mapDispatch)(JoinRoom);
