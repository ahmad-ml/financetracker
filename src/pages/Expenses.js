import React, { useState } from 'react';

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAmountChange = e => setAmount(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);

  const addExpense = () => {
    setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
    setAmount("");
    setDescription("");
  }

  return (
    <div>
      <h1>Expenses</h1>
      <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} />
      <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} />
      <button onClick={addExpense}>Add Expense</button>

      {expenses.map((expense, index) => (
        <div key={index}>
          <p>Description: {expense.description}</p>
          <p>Amount: {expense.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Expenses;
