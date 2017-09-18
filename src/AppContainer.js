
import { connect } from 'react-redux';
import App from './App';


const mapStateToProps = state => {
  return {
  values: Object
            .keys(state.counters.present)
            .reduce( (tally, key)  => tally + String(state.counters.present[key]), '')
}};

export default connect(mapStateToProps)(App);
