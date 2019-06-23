import { connect } from 'react-redux';
import TabBar from '../components/TabBar';

const mapState = state => ({
  rooms: state.rooms,
})

export default connect(mapState)(TabBar);
