import { connect } from 'react-redux';
import { addRoom, updateActiveRoom ,updateRoom, addMessage } from '../actions'
import ChatArea from '../components/ChatArea'

const mapState = state => {
  return {
    rooms: state.rooms,
    activeRoom: state.activeRoom
  }
}

const mapDispatch = dispatch => {
  return {
    addRoom: () => dispatch(addRoom()),
    updateActiveRoom: index => dispatch(updateActiveRoom(index)),
    updateRoom: room => dispatch(updateRoom(room)),
    addMessage: (room, msg) => dispatch(addMessage(room, msg))
  }
}

export default connect(mapState, mapDispatch)(ChatArea)
