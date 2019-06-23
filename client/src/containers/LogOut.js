import { connect } from 'react-redux';
import { updateUser, deleteRoomInfo } from '../actions';
import LogOut from '../components/LogOut';

const mapState = state => ({
  user: state.user,
  rooms: state.rooms
})

const mapDispatch = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  deleteRoomInfo: room => dispatch(deleteRoomInfo(room))
})

export default connect(mapState, mapDispatch)(LogOut);
