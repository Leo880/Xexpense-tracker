import React from "react";

/*const Wallet = ({ balance, onAddIncome, onAddExpense }) => {
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
*/


import "./Wallet.css"

export default function Wallet({ balance, expenses=[], onAddIncome, onAddExpense }) {
  // calculate total expenses
  const totalExpenses = expenses.reduce((acc, e) => acc + Number(e.price), 0);

  return (
    <div className="wallet">
      <div className="card">
        <h2>Wallet Balance</h2>
        <p>${balance.toFixed(2)}</p>
        <button type="button" onClick={onAddIncome}>
          + Add Income
        </button>
        <button type="button" onClick={onAddExpense}>
          + Add Expense
        </button>
      </div>

      <div className="card">
        <h2>Expenses</h2>
        <p>${totalExpenses.toFixed(2)}</p>
      </div>
    </div>
  );
}

 