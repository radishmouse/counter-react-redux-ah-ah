import React from 'react';

const Counter = ({
  id,
  val,
  handleIncrement,
  handleDecrement
}) => (
    <div>
        <span>{val}</span>
        <button onClick={
          (e) => handleIncrement(id)
        }>+</button>
        <button onClick={
          (e) => handleDecrement(id)
        }>-</button>
    </div>
);

export default Counter;
