
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => {
  return {
  values: Object
            .keys(state.present)
            .reduce( (tally, key)  => tally + String(state.present[key]), '')
}};

export default connect(mapStateToProps)(App);
