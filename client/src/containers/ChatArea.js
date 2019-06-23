import { connect } from 'react-redux';
import ChatArea from '../components/ChatArea'

const mapState = state => ({
  inRoom: state.rooms[state.activeRoom],
  activeRoom: state.activeRoom,
  rooms: state.rooms
})

export default connect(mapState)(ChatArea)
