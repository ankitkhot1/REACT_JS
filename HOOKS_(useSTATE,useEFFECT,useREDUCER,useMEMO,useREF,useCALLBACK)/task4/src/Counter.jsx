import React, { useState, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  renders.current++;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>
      <p>Renders: {renders.current}</p>
    </div>
  );
};

export default Counter;
