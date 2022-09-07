import styles from './Expense.module.css';
import RowAdder from './RowAdder';
import { useStateProvider } from '../../utilty/StateProvider';

const ExpenseData = () => {
    console.log("Expense Data");
    const [{ expenses }, dispatch] = useStateProvider();
    return (
        <div className={styles.expenseData}>

            {
                expenses.map((expData, index) => <RowAdder key={index.toString()} expData={expData} index={index + 1} />)
            }
            {
                expenses.length === 0 && <h2 style={{
                    textAlign: "center",
                    marginTop: "15%"
                }}> No Expense Record</h2>
            }
        </div>
    )
}
export default ExpenseData;