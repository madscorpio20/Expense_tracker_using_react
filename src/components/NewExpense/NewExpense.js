import "./NewExpense.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{
    const saveExpenseHandler = (receivedExpenseData) =>{
        const expenseData = {
            ...receivedExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }
    return(
        <div className = "new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;