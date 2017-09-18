const marta = (state=[], action) => {

  switch (action.type) {
    case 'MARTA':
      debugger;
      // I expect that the action will have the marta data
      // thanks to redux-promise

    default:
      console.log('this is the default');
      return state;
  }
};

export default marta
