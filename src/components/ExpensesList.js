import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

let ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expense</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.LocationOfExpenditure}
        />
      ))}
      {props.item.length === 1 && (
        <p className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </p>
      )}
    </ul>
  );
};

export default ExpensesList;
