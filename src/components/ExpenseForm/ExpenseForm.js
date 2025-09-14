import React, { useState, useEffect } from "react";

const ExpenseForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setPrice(initialData.price);
      setCategory(initialData.category);
      setDate(initialData.date);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !category || !date) return;
    onSubmit({ title, price, category, date });
    setTitle("");
    setPrice("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense Title"
      />
      <input
        name="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Expense Amount"
      />
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <input
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">
        {initialData ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;
