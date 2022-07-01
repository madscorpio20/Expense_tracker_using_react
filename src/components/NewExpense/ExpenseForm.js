import React , {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle , setTitle] = useState('');
    const [enteredAmount , setAmount] = useState('');
    const [enteredDate , setDate] = useState('');

    const changeTitleHandler = (event) =>{
        setTitle(event.target.value);
    }
    const changeAmountHandler = (event) =>{
        setAmount(event.target.value);
    }
    const changeDateHandler = (event) =>{
        setDate(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            titel: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={changeTitleHandler} placeholder="Expense Title" required></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="1" value={enteredAmount} onChange={changeAmountHandler} placeholder="Amount" required></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={changeDateHandler} placeholder="Date" required></input>
        </div>
      </div>
      <div id="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
