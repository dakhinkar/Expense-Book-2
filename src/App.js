import React from "react";
import {Container} from 'react-bootstrap';
import ExpenseItem from "./components/Body/ExpenseItem";
import styles from './App.module.css';
const App = () =>{
  const style = {
    
  }
  return(
    <Container className={styles.app_container} >
      <ExpenseItem/>
    </Container>
  )
}

export default App;
