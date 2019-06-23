import { connect } from 'react-redux';
import SideBar from '../components/SideBar';

const mapState = state => ({
  user: state.user
})

export default connect(mapState)(SideBar);
