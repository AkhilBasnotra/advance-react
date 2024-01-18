import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

let NewExpense = (props) => {
  function expenseData(expectedData) {
    let myObj = {
      ...expectedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(myObj);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseData} />
    </div>
  );
};

export default NewExpense;
