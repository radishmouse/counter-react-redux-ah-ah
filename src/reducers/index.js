import {
  combineReducers,
} from 'redux';

import counters from './counters';
import marta from './marta';

const rootReducer = combineReducers({
  counters,
  marta
});

export default rootReducer;
