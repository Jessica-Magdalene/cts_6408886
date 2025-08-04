import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === 'euro') {
      const result = parseFloat(amount) * 80;
      alert(`Converting to Euro Amount is ${result}`);
    } else {
      alert('Please enter Euro as currency');
    }
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Amount: <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          Currency: <input value={currency} onChange={(e) => setCurrency(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CurrencyConvertor;
