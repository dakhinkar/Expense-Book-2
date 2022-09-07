
import ExpenseForm from "./ExpenseForm";
import { reducerCases } from "../../utilty/constant";
import { useStateProvider } from "../../utilty/StateProvider";
import styles from './AddExpense.module.css';
const AddExpense = () => {
    console.log("Add Expense");
    const [{ addUpdate }, dispatch] = useStateProvider();
    const addHandler = () => {
        dispatch({ type: reducerCases.SET_ADD_UPDATE, value: true });
    }
    return (
        <>
            {
                // addUpdate ? <ExpenseForm addHandler ={addHandler}/> : <button className={styles.addButton} onClick={() =>  addHandler(true)} >Add New Expense</button>
                !addUpdate && <button className={styles.addButton} onClick={addHandler} >Add New Expense</button>
            }
        </>
    );
}
export default AddExpense;

