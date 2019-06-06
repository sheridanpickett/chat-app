import { connect } from 'react-redux';
import { addRoom, updateActiveRoom } from '../actions';
import TabNew from '../components/TabNew';

const mapState = state => {
  return {
    rooms: state.rooms
  }
}

const mapDispatch = dispatch => {
  return {
    addRoom: () => dispatch(addRoom()),
    updateActiveRoom: index => dispatch(updateActiveRoom(index))
  }
}

export default connect(mapState, mapDispatch)(TabNew);
