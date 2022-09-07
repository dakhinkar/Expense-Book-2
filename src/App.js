import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {Container} from 'react-bootstrap';

// import styles from './App.module.css';
// import Body from "./components/Body/Body";
// import AddExpense from "./components/Opearation/AddExpense";
// import ExpenseForm from "./components/Opearation/ExpenseForm";
// import { reducerCases} from './utilty/constant'
// import { useStateProvider } from './utilty/StateProvider';
// import axios from 'axios';
import NavBar from "./components/Navbar/NavBar";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";


const App = () => {
  // const [{ expenses, addUpdate, perPage, selectedYear, deleteRecoder }, dispatch] = useStateProvider();
  
  // useEffect(() => {
  //   const fetchReq = async () => {
  //     const resp = await axios.get('http://localhost:4500/expense/', {
  //       params: {
  //         year: selectedYear,
  //         limit: perPage,
  //         offset: 0,
  //       },
  //       headers: {
  //         "Content-type" : "application/json"
  //       }
  //     })
  //     console.log(resp.data);
  //     dispatch({type: reducerCases.SET_EXPENSES, expenses:resp.data})
  //   }
  //   fetchReq();
  // },[addUpdate, perPage, selectedYear, deleteRecoder])
  console.log("App");
  return(
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>

          {/* <ExpenseForm/>
          <Body/> */}
        </Router>
    </div>
  )
}

export default App;
