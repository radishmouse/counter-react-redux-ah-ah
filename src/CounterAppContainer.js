import { connect } from 'react-redux';
import { createCounter } from './actions';
import CounterApp from './CounterApp';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  handleAddCounter: () => {
    dispatch(createCounter());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);
