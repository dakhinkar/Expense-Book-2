import style from "./ExpenseForm.module.css";
import React, { useState, useRef } from "react";
import { reducerCases } from "../../utilty/constant";
import { useStateProvider } from "../../utilty/StateProvider";
import { useEffect } from "react";
import axios from 'axios';
const ExpenseForm = ({ addHandler }) => {
    console.log("Expense form");
    const intitailState = {
        Id: "",
        Date: "",
        Title: "",
        Amount: ""
    }
    const [{ updateExpense, addUpdate }, dispatch] = useStateProvider();

    const [currExpense, setCurrExpense] = useState(updateExpense);

    let currentDate = new Date().toISOString();
    currentDate = currentDate.slice(0, currentDate.indexOf('T'));


    const dateChange = (e) => {
        setCurrExpense({ ...currExpense, Date: e.target.value })
    }
    const titleChange = (e) => {
        setCurrExpense({ ...currExpense, Title: e.target.value })
    }
    const amountChange = (e) => {
        setCurrExpense({ ...currExpense, Amount: e.target.value })
    }
    const cancelHandler = () => {
        setCurrExpense(intitailState)
        dispatch({ type: reducerCases.SET_ADD_NEW_EXPENSE, updateExpense: intitailState })
        dispatch({ type: reducerCases.SET_ADD_UPDATE, value: false });
    }
    const adder = async () => {
        const resp = axios.post('http://localhost:4500/expense/add/', {
            body: {
                date: currExpense.Date,
                title: currExpense.Title,
                desc: "",
                amount: currExpense.Amount
            },
            header: {
                "Content-type": "application/json"
            }
        })
        resp.then((res) => console.log(res));

    }
    const updater = async () => {
        const resp = await axios.put('http://localhost:4500/expense/update/', {
            params: {
                id: updateExpense.Id
            },
            body: {
                date: currExpense.Date,
                title: currExpense.Title,
                desc: "",
                amount: currExpense.Amount
            },
            header: {
                "Content-type": "application/json"
            }
        }).then((res) => console.log(res));
        // console.log(resp);
        // // resp.then((res) => console.log(res));
    }
    const submitHandler = (event) => {
        if (updateExpense.Id !== "") {
            updater();
        } else {
            adder();
        }
        event.preventDefault();
        // clear();
        cancelHandler();
    }


    return (
        <> {
            addUpdate && <form className={style.controls} >
                <div className={style.expenseControls}>
                    <div className={style.expenseControl} >
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date"
                            max={currentDate}
                            defaultValue={updateExpense.Date}
                            value={currExpense.Date}
                            onChange={dateChange} required />
                    </div>
                    <div className={style.expenseControl}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title"
                            defaultValue={currExpense.Title}
                            value={currExpense.Title}
                            onChange={titleChange} required />
                    </div>
                    <div className={style.expenseControl}>
                        <label htmlFor="amount">Amount : </label>
                        <input type="number" name="amount" id="amount"
                            value={currExpense.Amount}
                            onChange={amountChange} required />
                    </div>
                </div>
                <div className={style.expenseAction}>
                    <button type="cancel" onClick={cancelHandler}>Cancel</button>
                    <button type="submit" onClick={submitHandler}>Add / Upadte Expence</button>
                </div>
            </form>
        }
        </>

    )
}

export default ExpenseForm;
