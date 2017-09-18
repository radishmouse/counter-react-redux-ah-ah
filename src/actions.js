
/*

the state
{
  "asfd-adsf-asdf": 0,
  "22ad-zxcv-asbf": 5,
  "zz00-wjer-asdf": 8,
  "23kk-adsf-a23f": -1,
}


der actions

{
  type: INCREMENT,
  id: "zz00-wjer-asdf"
}

{
  type: DECREMENT,
  id: "zz00-wjer-asdf"
}
*/

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CREATE_COUNTER = 'CREATE_COUNTER';
export const DESTROY_COUNTER = 'DESTROY_COUNTER';

export const incrementCounter = (id) => ({
  type: INCREMENT,
  id
});

export const decrementCounter = (id) => ({
  type: DECREMENT,
  id
});

export const createCounter = () => ({
  type: CREATE_COUNTER,
});

export const destroyCounter = (id) => ({
  type: DESTROY_COUNTER,
  id
});




