import React from "react";

const Wallet = ({ balance, onAddIncome, onAddExpense }) => {
  return (
    <div className="wallet">
      <h2>Wallet Balance: ${balance.toFixed(2)}</h2>
      <button type="button" onClick={onAddIncome}>
        + Add Income
      </button>
      <button type="button" onClick={onAddExpense}>
        + Add Expense
      </button>
    </div>
  );
};

export default Wallet;
