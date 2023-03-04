import React, { useState } from 'react';

const CountingState = () => {
  const [count, setCount] = useState(0);
  const onClickAddHendler = () => {
    setCount(count + 1);
  };
  const onClickSubHendler = () => {
    setCount(count - 1);
  };
  return (
    <React.Fragment>
      <button onClick={onClickAddHendler}>+</button>
      <button onClick={onClickSubHendler}>-</button>
      <p class="counter">Counter: {count}</p>
    </React.Fragment>
  );
};

export default CountingState;
