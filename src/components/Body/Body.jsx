
import Expense from "../ExpenseTable/Expense";
import Filter from "../Filter/Filter";
import AddExpense from "../Opearation/AddExpense";
import styles from './Body.module.css';

const Body = () => {
    console.log("body");
    return (
        <div className={styles.body}>
            <AddExpense />
            <Filter />
            <Expense />
        </div>
    )
}

export default Body;