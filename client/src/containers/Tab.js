import { connect } from 'react-redux';
import { deleteRoom, updateActiveRoom, deleteRoomInfo, setRoomNewMessage } from '../actions'
import Tab from '../components/Tab';

const mapState = (state, ownProps) => {
  let newMessage = false;
  if(state.roomInfo[ownProps.room]) {
    newMessage = state.roomInfo[ownProps.room].newMessage;
  }
  return {
    activeRoom: state.activeRoom,
    rooms: state.rooms,
    user: state.user,
    room: ownProps.room,
    index: ownProps.index,
    newMessage
  }
}

const mapDispatch  = dispatch => ({
  updateActiveRoom: index => dispatch(updateActiveRoom(index)),
  deleteRoom: index => dispatch(deleteRoom(index)),
  deleteRoomInfo: room => dispatch(deleteRoomInfo(room)),
  setRoomNewMessage: (room, newMessage) => dispatch(setRoomNewMessage(room, newMessage))
})

export default connect(mapState, mapDispatch)(Tab);
