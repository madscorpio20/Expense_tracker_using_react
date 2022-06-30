import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";


const ExpenseItem = (props)=> {
    const [title, setTitle] = useState(props.title);
    const changeTitle = ()=>{
        setTitle('New title');
    }
    return(
        <Card className="expense-item">
            <ExpenseDate date ={props.date}/>
            <div className="expense-item-description">
                <h2>{title}</h2>
                <div className="expense-item-price">${props.amount}</div>
            </div>
            <button onClick={changeTitle}>Change title</button>
        </Card>
    );    
}
export default ExpenseItem;