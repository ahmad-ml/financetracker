import React, { useState } from "react";

function Income() {
  const [income, setIncome] = useState([]);
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleSourceChange = (e) => setSource(e.target.value);

  const addIncome = () => {
    if (amount === "" || source === "") {
      alert("Please enter amount and source");
    } else {
      setIncome([...income, { source, amount: parseFloat(amount) }]);
      setAmount("");
      setSource("");
      setTotalIncome(totalIncome + parseFloat(amount));
    }
  };
  console.log(income);
  return (
    <div>
      <h1>Income</h1>
      <h2>Total Income: {totalIncome}</h2>
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={handleSourceChange}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={addIncome}>Add Income</button>

      {income.map((income, index) => (
        <div
          style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          key={index}>
          <p>SL : {index}</p>
          <p>Source: {income.source}</p>
          <p>Amount: {income.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Income;
