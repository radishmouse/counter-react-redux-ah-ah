
import Guid from 'guid';
import undoable, { distinctState } from 'redux-undo';

import {
  INCREMENT,
  DECREMENT,
  CREATE_COUNTER,
  DESTROY_COUNTER,
} from '../actions/counters';

const counter = (state, action) => {
  switch (action.type) {
    case CREATE_COUNTER:
      return {
        [Guid.create().value]: 0
      }
    case INCREMENT:
      // the `state` is a single counter
      // The `action` object will have the id
      return {
        [action.id]: state + 1
      }
    case DECREMENT:
      // the `state` is a single counter
      // The `action` object will have the id
      return {
        [action.id]: state - 1
      }
    default:
      return state;
    }
};

const counters = (state={}, action) => {
  let newState;
  switch (action.type) {
    case CREATE_COUNTER:
      // Commenting out and intentionally falling through
      // return {
      //   ...state,
      //   ...(counter(null, action))
      // }
    case INCREMENT:
      // intentional fallthrough
    case DECREMENT:
      return {
        ...state,
        ...counter(state[action.id], action)
      };

    case DESTROY_COUNTER:
      newState = {...state};
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default undoable(counters, {
  filter: distinctState()
});
