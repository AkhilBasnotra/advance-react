import { useState } from "react";
import "./ExpenseForm.css";
let ExpenseForm = (props) => {
  const [title, setTitle] = useState("");

  function enteredtitle(e) {
    let newValue = e.target.value;
    setTitle(newValue);
  }

  const [amount, setAmount] = useState("");

  function enteredAmount(e) {
    let newValue = e.target.value;
    setAmount(newValue);
  }

  const [date, setDate] = useState("");

  function enteredDate(e) {
    let newValue = e.target.value;
    setDate(newValue);
  }

  function submitHandler(e) {
    e.preventDefault();
    let myExpense = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(myExpense);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={enteredtitle} value={title} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={enteredDate}
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            value={date}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
