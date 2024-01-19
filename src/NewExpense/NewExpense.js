import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

let NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  function expenseData(expectedData) {
    let myObj = {
      ...expectedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(myObj);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
