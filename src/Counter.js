import React from 'react';

const Counter = ({
  id,
  val,
  handleIncrement,
  handleDecrement,
  handleDestroy,
}) => (
    <div>
      <button onClick={
        (e) => handleDecrement(id)
      }>-</button>
      <span>{val}</span>
      <button onClick={
        (e) => handleIncrement(id)
      }>+</button>
      <a href="#" onClick={
        (e) => handleDestroy(id)
      }>x</a>
    </div>
);

export default Counter;
