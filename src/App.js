import { useState } from "react";
import "./components/Expenses/expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
      LocationOfExpenditure: "IKEA",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      LocationOfExpenditure: "SAMSUNG STORE",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
      LocationOfExpenditure: "AUDI STORE",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 5, 12),
      LocationOfExpenditure: "IKEA",
    },
  ]);

  function addExpenseHandler(expectedData) {
    console.log("logging from app.js");
    setExpenses((prevExpense) => [expectedData, ...prevExpense]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
