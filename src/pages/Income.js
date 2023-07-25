import React, { useState } from 'react';

function Income() {
  const [income, setIncome] = useState([]);
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");

  const handleAmountChange = e => setAmount(e.target.value);
  const handleSourceChange = e => setSource(e.target.value);
  
  const addIncome = () => {
    setIncome([...income, { source, amount: parseFloat(amount) }]);
    setAmount("");
    setSource("");
  }

  return (
    <div>
      <h1>Income</h1>
      <input type="text" placeholder="Source" value={source} onChange={handleSourceChange} />
      <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} />
      <button onClick={addIncome}>Add Income</button>

      {income.map((income, index) => (
        <div key={index}>
          <p>Source: {income.source}</p>
          <p>Amount: {income.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Income;
