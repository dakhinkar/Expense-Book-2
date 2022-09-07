import {reducerCases} from './constant.js';
let currentYear = new Date().getFullYear();
export const initialState = {
    error : {
        title: null,
        message: null
    },
    expenses :[],
    updateExpense: {
        Id:"",
        Date: "",
        Title: "",
        Amount: ""
    },
    addUpdate : false,
    filteredYears : [ 
        currentYear, currentYear-1, currentYear-2,
        currentYear-3, currentYear-4, currentYear-5, 
        currentYear-6, currentYear-7, currentYear-8, 
        currentYear-9 ],
    recordsPerPages: [10, 20, 50, 100],
    perPage: 10,
    selectedYear : currentYear,
    monthyExpense: [250, 2566, 5612, 1452, 755, 6589, 856, 5502, 5632, 6523, 1452, 2234],
    deleteRecoder: null,
}
const reducer = (state, action) =>{
    switch(action.type){
        case reducerCases.SET_EXPENSES:
            return {...state, expenses: action.expenses}
        case reducerCases.SET_FILTER_YEAR:
            return {...state, selectedYear: action.value}
        case reducerCases.SET_RECORD_PER_PAGE:
            return {...state, perPage: action.value}
        case reducerCases.SET_ADD_NEW_EXPENSE:
            return { ...state,  updateExpense: action.updateExpense}
        case reducerCases.SET_ADD_UPDATE:
            return {...state, addUpdate: action.value}
        case reducerCases.SET_TOTAL_MONTHLY_EXP:
            return { ...state, monthyExpense: action.value }
        case  reducerCases.SET_DELETE:
            return {...state, deleteRecoder: action.value }
        default:
            return state;
    }
}   
export default reducer;

