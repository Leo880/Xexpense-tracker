import React from "react";

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

export default ExpenseList;
