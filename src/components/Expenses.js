import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./expenses.css";

let Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <h2>Expense Tracker</h2> */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.LocationOfExpenditure}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
