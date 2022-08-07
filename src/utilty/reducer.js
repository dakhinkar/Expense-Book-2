import {reducerCases} from './constant.js';

export const initialState = {
    error : {
        title: null,
        message: null
    },
    expenses :[],
}
const reducer = (state, action) =>{
    switch(action.type){
        case reducerCases.SET_EXPENSES:
            return {...state, expenses: action.expenses}
        default:
            return state;
    }
}   
export default reducer;

