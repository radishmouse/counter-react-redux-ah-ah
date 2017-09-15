
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  values: Object
            .keys(state)
            .reduce( (tally, key)  => tally + String(state[key]), '')
});

export default connect(mapStateToProps)(App);
