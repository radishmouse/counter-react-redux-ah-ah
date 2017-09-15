import React from 'react';
import Counter from './counter';

const CounterList = ({
  counters,
  handleIncrement,
  handleDecrement
}) => (
  <div>
    {
      counters.map( (counter, idx) => (
        <Counter key={idx}
          id={counter.id}
          val={counter[counter.id]}
          handleIncrement={handleIncrement},
          handleDecrement={handleDecrement}
        />
      ));
    }
  </div>
);

export default CounterList;
