import { connect } from 'react-redux';
import { updateName } from '../actions';
import Presentational from './Presentational';

const mapStateToProps = state => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: name => {
      dispatch(updateName(name))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default Container;
