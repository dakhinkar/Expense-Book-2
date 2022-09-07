import styles from './Expense.module.css';

const ExpenseHeader = () => {
    console.log("Expense Header");
    return (
        <div className={styles.header}>
            <span>#</span>
            <div>Date</div>
            <div>Title</div>
            <div>Amount</div>
            <div>Action</div>
        </div>
    );
}

export default ExpenseHeader;