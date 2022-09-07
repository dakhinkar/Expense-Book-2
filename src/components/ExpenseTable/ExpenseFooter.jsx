import styles from './Expense.module.css';
import { reducerCases } from '../../utilty/constant';
import { useStateProvider } from '../../utilty/StateProvider';
const ExpenseFooter = () => {
    console.log("Expense Footer");
    const [{ perPage }, dispatch] = useStateProvider();
    const perPageChange = (event) => {
        dispatch({ type: reducerCases.SET_RECORD_PER_PAGE, value: event.target.value });
    }
    console.log("item per ", perPage);
    return (

        <div className={styles.expFooter}>
            <div className={styles.parPageFltr}>
                <div>
                    <strong> per Page</strong>
                </div>
                <select name="parPage" id="perPage" value={perPage} onChange={perPageChange} >
                    <option value="10"
                    >10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div>
                pagination

            </div>
        </div>
    )
}
export default ExpenseFooter;
