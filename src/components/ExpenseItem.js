import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";

let ExpenseItem = (props) => {
  let deleteExpense = () => {};
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
};

export default ExpenseItem;
