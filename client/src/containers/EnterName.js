import { connect } from 'react-redux';
import { updateUser } from '../actions';
import EnterName from '../components/EnterName';

const mapDispatch = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  }
}

export default connect(null, mapDispatch)(EnterName)
