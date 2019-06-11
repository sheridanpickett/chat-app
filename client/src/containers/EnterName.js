import { connect } from 'react-redux';
import { updateUser } from '../actions';
import EnterName from '../components/EnterName';

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  }
}

export default connect(mapState, mapDispatch)(EnterName)
