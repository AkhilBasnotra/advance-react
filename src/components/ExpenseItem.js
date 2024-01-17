import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

let ExpenseItem = (props) => {
  const [expense, setExpense] = useState(props.amount);

  let clickHandler = () => {
    setExpense("$100");
    console.log("delete");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={expense}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Change Expense</button>
    </Card>
  );
};

export default ExpenseItem;
