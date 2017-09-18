import { FETCH_MARTA } from '../actions/marta';

const marta = (state=[], action) => {

  switch (action.type) {
    case FETCH_MARTA:
      return action.payload.data;
      // I expect that the action will have the marta data
      // thanks to redux-promise

    default:
      console.log('this is the default');
      return state;
  }
};

export default marta
