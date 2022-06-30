import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";


const ExpenseItem = (props)=> {
    const [newTitle, setNewTitle] = useState("");
    const [title, setTitle] = useState(props.title);
    const changeTitle = ()=>{
        setTitle(newTitle);
    }
    const changeHandler = (event) =>{
        setNewTitle(event.target.value);
    }
    return(
        <Card className="expense-item">
            <ExpenseDate date ={props.date}/>
            <div className="expense-item-description">
                <h2>{title}</h2>
                <div className="expense-item-price">${props.amount}</div>
            </div>
            <input type="text" value={newTitle} onChange = {changeHandler} placeholder = "New Title"></input>
            <button onClick={changeTitle}>Change title</button>
        </Card>
    );    
}
export default ExpenseItem;