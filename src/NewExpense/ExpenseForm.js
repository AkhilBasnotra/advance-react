import { useState } from "react";
import "./ExpenseForm.css";
let ExpenseForm = () => {
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

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={enteredtitle} type="text" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={enteredDate}
            type="date"
            min="2021-01-01"
            max="2024-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
