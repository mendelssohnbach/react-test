import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputCValue, setInputCValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputCValue);
  };

  const subtractToCounter = () => {
    setCounterValue(counterValue - inputCValue);
  };

  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h2
        data-testid="counter"
        className={`${counterValue >= 100 ? 'green' : ''}${counterValue <= -100 ? 'red' : ''}`}
      >
        {counterValue}
      </h2>
      <button data-testid="subtract-btn" onClick={subtractToCounter}>
        -
      </button>
      <input
        type="number"
        data-testid="input"
        value={inputCValue}
        className="text-center"
        onChange={(e) => setInputCValue(parseInt(e.target.value))}
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
