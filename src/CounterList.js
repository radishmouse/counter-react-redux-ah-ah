import React from 'react';
import Counter from './Counter';

const CounterList = ({
  counters,
  handleIncrement,
  handleDecrement
}) => (
  <div>
    {
      Object.keys(counters).map( (counterId, idx) => (
        <Counter key={counterId}
          id={counterId}
          val={counters[counterId]}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ))
    }
  </div>
);

export default CounterList;
