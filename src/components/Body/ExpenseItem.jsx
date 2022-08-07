import React, {useEffect} from "react";
import { Container } from 'react-bootstrap'
import {useStateProvider} from '../../utilty/StateProvider';
import {reducerCases} from '../../utilty/constant';
import axios from 'axios';
import ExpenseHeader from './ExpenseHeader';
import ExpenseData from "./ExpenseData";
const ExpenseItem = () =>{
    const[{expenses}, dispatch] = useStateProvider();
    useEffect(() => {
        const getExepenses = async () =>{
            const response = await axios.get('http://localhost:4500/');
            dispatch({type:reducerCases.SET_EXPENSES, expenses: response.data});
        }
        getExepenses();
    },[])
    return(
        <Container style={{textAlign : "left", background:"gray", color: "white", padding :"0.5rem", borderRadius: "20px"}}>
            <ExpenseHeader/>
           {
            expenses && expenses.map((data, index) => (
               <ExpenseData key={index.toString()} data = {data}/>
            ))
           }
        </Container>
    )
}

export default ExpenseItem;