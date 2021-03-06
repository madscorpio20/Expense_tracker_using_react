import Expenses from "./components/Expenses/Expenses";
 import "./App.css";
 import React from "react";
 import NewExpense from "./components/NewExpense/NewExpense";
 
 const App = ()=>{
    let expense = [
        {
            id: 'e1',
            title: 'College fess',
            amount: 250,
            date: new Date(2022 , 6, 29)
        },
        {
            id: 'e2',
            title: 'Books',
            amount: 50,
            date: new Date(2022 , 6, 29)
        },
        {
            id: 'e3',
            title: 'Food',
            amount: 120,
            date: new Date(2022 , 6, 29)
        },
        {
            id: 'e4',
            title: 'Travel',
            amount: 60,
            date: new Date(2022 , 6, 29)
        },
        {
            id: 'e5',
            title: 'House rent',
            amount: 800,
            date: new Date(2022 , 6, 29)
        },

    ];
    const addExpenseHandler = (expense) => {
        console.log(expense);
    }
    return (
        <div>
            <h1 className="heading">Expense Tracker</h1>
            <NewExpense onAddExpense = {addExpenseHandler} />
            <Expenses item = {expense}/>
        </div>
        
    );
}
export default App;