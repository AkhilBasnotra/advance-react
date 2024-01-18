import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./components/expenses.css";
import Card from "./components/Card";
import NewExpense from "./NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
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
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "AUDI STORE",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
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
      <Card className="expenses">
        {/* <h2>Expense Tracker</h2> */}
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.LocationOfExpenditure}
          />
        ))}
      </Card>
    </div>
  );
}

export default App;
