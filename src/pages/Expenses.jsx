import React, { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const addExpense = () => {
    if (amount === "" || description === "") {
      alert("Please enter amount and description");
    } else {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setAmount("");
      setDescription("");
      setTotalExpenses(totalExpenses + parseFloat(amount));
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  };

  return (
    <div>
      <h1>Expenses</h1>
      <h2>Total Expenses = {totalExpenses}</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={addExpense}>Add Expense</button>

      {expenses.map((expense, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "center", gap:"1rem" }}>
          <p>SL: {index}</p>
          <p>Description: {expense.description}</p>
          <p>Amount: {expense.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Expenses;
