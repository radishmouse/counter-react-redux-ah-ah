import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import UndoRedo from './UndoRedo';

const mapStateToProps = state => ({
  canUndo: state.past.length > 0,
  canRedo: state.future.length > 0,
});

const mapDispatchToProps = dispatch => ({
  onUndo: () => dispatch(UndoActionCreators.undo()),
  onRedo: () => dispatch(UndoActionCreators.redo())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);

