let ExpenseForm = (props) => {
  function titleChange(e) {
    let newValue = e.target.value;
    console.log(newValue);
  }
  return (
    <form>
      <div>
        <lable>Title </lable>
        <input onChange={titleChange} type="text" />
      </div>
      <div>
        <lable>Date </lable>
        <input type="date" />
      </div>
      <div>
        <lable>Amount </lable>
        <input type="number" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default ExpenseForm;
