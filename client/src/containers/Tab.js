import { connect } from 'react-redux';
import { deleteRoom, updateActiveRoom, deleteRoomInfo } from '../actions'
import Tab from '../components/Tab';

const mapState = (state, ownProps) => {
  return {
    activeRoom: state.activeRoom,
    rooms: state.rooms,
    user: state.user,
    room: ownProps.room,
    index: ownProps.index
  }
}

const mapDispatch  = dispatch => {
  return {
    updateActiveRoom: index => dispatch(updateActiveRoom(index)),
    deleteRoom: index => dispatch(deleteRoom(index)),
    deleteRoomInfo: room => dispatch(deleteRoomInfo(room))
  }
}

export default connect(mapState, mapDispatch)(Tab);
