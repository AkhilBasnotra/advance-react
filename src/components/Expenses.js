import { useState } from "react";
import Card from "./Card";
import ExpensesList from "./ExpensesList";
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
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
