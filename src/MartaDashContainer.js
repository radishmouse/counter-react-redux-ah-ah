
import { connect } from 'react-redux';
import MartaDash from './MartaDash';
import fetchData from './actions/marta';

const mapStateToProps = (state, ownProps) => ({
  marta: state.marta,
  filter: ownProps.filter
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(fetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MartaDash);
