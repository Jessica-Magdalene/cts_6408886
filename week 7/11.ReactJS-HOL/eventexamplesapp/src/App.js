import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert('Hello! Member1');
  };

  const sayMessage = (msg) => {
    alert(msg);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: '20px' }}>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayMessage("welcome")}>Say welcome</button>
      <br />
      <button onClick={handleClick}>Click on me</button>
      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
