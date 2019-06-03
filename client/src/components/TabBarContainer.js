import { connect } from 'react-redux';
import { updateActiveRoom, deleteRoom } from '../actions'
import TabBar from './TabBar';

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    activeRoom: state.activeRoom
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateActiveRoom: (room, index) => {
      dispatch(updateActiveRoom(room, index))
    },
    deleteRoom: index => {
      dispatch(deleteRoom(index))
    }
  }
}

const TabBarContainer = connect(mapStateToProps, mapDispatchToProps)(TabBar);

export default TabBarContainer;
