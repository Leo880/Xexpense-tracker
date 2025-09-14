/*import React from "react";

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Expense History</h2>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.title} - ${exp.price} ({exp.category}) on {exp.date}
            <button onClick={() => onEdit(exp, index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;*/



 
import React from "react";
import "./ExpenseList.css"

export default function ExpenseList({ expenses, onEdit, onDelete }) {
  return (
    <div className="expense-list">
      <h2>Transactions</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.title}</span>
              <span>${expense.price}</span>
              <span>{expense.category}</span>
              <span>{expense.date}</span>
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
