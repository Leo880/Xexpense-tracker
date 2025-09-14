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


/*import "./Wallet.css"

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
*/



import "./Wallet.css";

export default function Wallet({ balance, expenses = [], onAddIncome, onAddExpense }) {
  const totalExpenses = expenses.reduce((acc, e) => acc + Number(e.price), 0);

  return (
    <div className="wallet">
      {/* Container for both cards */}
      <div className="cards-container">
        {/* Wallet Balance card */}
        <div className="card balance-card">
          <h2>Wallet Balance</h2>
          <p className="amount">₹{balance.toFixed(0)}</p>
          <button type="button" onClick={onAddIncome} className="income-btn">
            + Add Income
          </button>
        </div>

        {/* Expenses card */}
        <div className="card expenses-card">
          <h2>Expenses</h2>
          <p className="amount">₹{totalExpenses.toFixed(0)}</p>
          <button type="button" onClick={onAddExpense} className="expense-btn">
            + Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}


 