import ExpenseData from "../ExpenseTable/ExpenseData";
import ExpenseHeader from "../ExpenseTable/ExpenseHeader";
import ExpenseFooter from "./ExpenseFooter";
const Expense = () => {
    console.log("Expense");
    return (
        <>
            <ExpenseHeader />
            <ExpenseData />
            <ExpenseFooter />
        </>
    );
}

export default Expense;