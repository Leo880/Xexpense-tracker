//import logo from './logo.svg';
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { SnackbarProvider, useSnackbar } from "notistack";
import Wallet from "./components/Wallet";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryChart from "./components/SummaryChart";
import TrendsChart from "./components/TrendsChart";
import "./App.css";

Modal.setAppElement("#root");

function AppWrapper() {
  return (
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  );
}

function App() {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    const savedExpenses = localStorage.getItem("expenses");
    if (savedBalance) setBalance(Number(savedBalance));
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [balance, expenses]);

  const addIncome = (amount) => {
    setBalance(balance + Number(amount));
    enqueueSnackbar("Income added successfully!", { variant: "success" });
    setShowIncomeForm(false);
  };

  const addExpense = (expense) => {
    if (Number(expense.price) > balance) {
      enqueueSnackbar("Insufficient balance!", { variant: "error" });
      return;
    }
    setExpenses([...expenses, expense]);
    setBalance(balance - Number(expense.price));
    enqueueSnackbar("Expense added successfully!", { variant: "success" });
    setShowExpenseForm(false);
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((exp, index) =>
      index === editingExpense.index ? updatedExpense : exp
    );
    const oldPrice = Number(expenses[editingExpense.index].price);
    const newPrice = Number(updatedExpense.price);
    let newBalance = balance + oldPrice - newPrice;

    if (newBalance < 0) {
      enqueueSnackbar("Insufficient balance for update!", { variant: "error" });
      return;
    }

    setExpenses(updatedExpenses);
    setBalance(newBalance);
    enqueueSnackbar("Expense updated successfully!", { variant: "info" });
    setEditingExpense(null);
    setShowExpenseForm(false);
  };

  const deleteExpense = (index) => {
    const updated = [...expenses];
    const removed = updated.splice(index, 1)[0];
    setExpenses(updated);
    setBalance(balance + Number(removed.price));
    enqueueSnackbar("Expense deleted!", { variant: "warning" });
  };

  const handleEditExpense = (expense, index) => {
    setEditingExpense({ ...expense, index });
    setShowExpenseForm(true);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <Wallet
        balance={balance}
        onAddIncome={() => setShowIncomeForm(true)}
        onAddExpense={() => {
          setEditingExpense(null);
          setShowExpenseForm(true);
        }}
      />

      <Modal
        isOpen={showIncomeForm}
        onRequestClose={() => setShowIncomeForm(false)}
        contentLabel="Add Income"
      >
        <IncomeForm onSubmit={addIncome} />
        <button onClick={() => setShowIncomeForm(false)}>Close</button>
      </Modal>

      <Modal
        isOpen={showExpenseForm}
        onRequestClose={() => setShowExpenseForm(false)}
        contentLabel="Add Expense"
      >
        <ExpenseForm
          onSubmit={editingExpense ? updateExpense : addExpense}
          initialData={editingExpense}
        />
        <button onClick={() => setShowExpenseForm(false)}>Close</button>
      </Modal>

      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpense}
        onEdit={handleEditExpense}
      />

      <SummaryChart expenses={expenses} />
      <TrendsChart expenses={expenses} />
    </div>
  );
}

export default AppWrapper;
