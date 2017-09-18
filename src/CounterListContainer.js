import CounterList from './CounterList';
import { connect } from 'react-redux';
import * as actions from './actions/counters';

const mapStateToProps = state => ({
  counters: state.counters.present
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: id => {
    dispatch(actions.incrementCounter(id))
  },
  handleDecrement: id => {
    dispatch(actions.decrementCounter(id))
  },
  handleDestroy: id => {
    dispatch(actions.destroyCounter(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
