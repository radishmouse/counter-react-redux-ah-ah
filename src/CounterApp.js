import React from 'react';

const CounterApp = ({
  handleAddCounter
}) => (
  <div>
    <button onClick={handleAddCounter}>Add Counter</button>
  </div>
);

export default CounterApp;
