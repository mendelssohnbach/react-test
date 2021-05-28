import { useState } from 'react';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputCValue, setInputCValue] = useState(1);

  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="subtract-btn">-</button>
      <input type="number" data-testid="input" value={inputCValue} />
      <button data-testid="add-btn">+</button>
    </div>
  );
}

export default Counter;
