import CounterList from './CounterList';
import { connect } from 'react-redux';
import * as actions from './actions';

const mapStateToProps = state => ({
  counters: state
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: id => {
    dispatch(actions.incrementCounter(id))
  },
  handleDecrement: id => {
    dispatch(actions.decrementCounter(id))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
