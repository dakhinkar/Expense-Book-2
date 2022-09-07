import styles from './Expense.module.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import { useStateProvider } from '../../utilty/StateProvider';
import { reducerCases } from '../../utilty/constant';
import axios from 'axios';
const RowAdder = ({ expData, index }) => {
    const [{ updateExpense, addUpdate, deleteRecoder }, dispatch] = useStateProvider();

    const editHandler = () => {
        dispatch({ type: reducerCases.SET_ADD_NEW_EXPENSE, updateExpense: expData });
        dispatch({ type: reducerCases.SET_ADD_UPDATE, value: true });
    }
    const deleteHandler = async (id) => {
        const resp = await axios.put('http://localhost:4500/expense/delete/', {
            params: {
                id: id,
            },
            header: {
                "Content-type": "application/json"
            }
        }).then((res) => console.log(res));
        // resp.then((res) => console.log(res));
        // dispatch({ type: reducerCases.SET_DELETE, value: id });
        // console.log("deleted id ", id);
        dispatch({ type: reducerCases.SET_DELETE, value: "" })
    }
    const getDate = (date) => {
        let tIndex = date.indexOf('T');
        return date.slice(0, tIndex);
    }
    return (
        <div className={styles.rowData}>
            <span>{index}</span>
            <div>{getDate(expData.Date)}</div>
            <div>{expData.Title}</div>
            <div>{expData.Amount}</div>
            <div className={styles.action}>
                <FiEdit2 className={styles.actionEdit} onClick={editHandler} />
                <RiDeleteBin5Line className={styles.actionDelete} onClick={() => deleteHandler(expData.Id)} />
            </div>
        </div>
    )
}

export default RowAdder;
