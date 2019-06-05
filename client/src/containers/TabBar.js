import { connect } from 'react-redux';
import { updateActiveRoom, deleteRoom, addRoom } from '../actions'
import TabBar from '../components/TabBar';

const mapState = state => {
  return {
    rooms: state.rooms,
    activeRoom: state.activeRoom
  }
}

const mapDispatch = dispatch => {
  return {
    updateActiveRoom: index => dispatch(updateActiveRoom(index)),
    addRoom: () => dispatch(addRoom()),
    deleteRoom: index => dispatch(deleteRoom(index))
  }
}

export default  connect(mapState, mapDispatch)(TabBar);
