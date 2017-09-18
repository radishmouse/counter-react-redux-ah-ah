
import { connect } from 'react-redux';
import MartaDash from './MartaDash';
import fetchData from './actions/marta';

const mapStateToProps = state => ({
  marta: state.marta
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(fetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MartaDash);
