import { reducerCases } from "../../utilty/constant";
import { useStateProvider } from "../../utilty/StateProvider";
import styles from './Filter.module.css';

const Filter = () => {
    console.log("filter");
    const [{ filteredYears, selectedYear }, dispatch] = useStateProvider();
    const yearChangeHandler = (event) => {
        dispatch({ type: reducerCases.SET_FILTER_YEAR, value: event.target.value });
    }
    console.log("Selected Year", selectedYear)
    return (
        <>
            <div className={styles.filter}>
                <h3>Filter by Year: </h3>
                <select name="year" id="year" value={selectedYear} onChange={yearChangeHandler}>
                    {
                        filteredYears.map((year, index) => (
                            <option key={index.toString()} value={year}>{year}</option>
                        ))
                    }
                </select>
            </div>
        </>
    );
}

export default Filter;