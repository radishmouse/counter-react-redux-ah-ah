import { connect } from 'react-redux';
import { createCounter } from './actions';
import CounterApp from './CounterApp';

const mapDispatchToProps = dispatch => ({
  handleAddCounter: () => {
    dispatch(createCounter());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CounterApp);
