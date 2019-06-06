import { connect } from 'react-redux';
import ChatArea from '../components/ChatArea'

const mapState = state => {
  return {
    inRoom: state.rooms[state.activeRoom]
  }
}

export default connect(mapState)(ChatArea)
