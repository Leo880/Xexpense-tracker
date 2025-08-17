import React, { useState } from "react";

const IncomeForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    onSubmit(amount);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Income Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Balance</button>
    </form>
  );
};

export default IncomeForm;
