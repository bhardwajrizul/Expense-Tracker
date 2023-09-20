import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";
import generateData from "../utils/faker";

const ExpenseContext = createContext();

function ExpenseProvider( {children} ) {
    const [state, dispatch] = useReducer(ExpenseReducer, {
        itemName: '',
        cost: 0,
        data: generateData(),
        searchTerm: ''
    })

    return (
        <ExpenseContext.Provider value={{state, dispatch}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export  {ExpenseProvider};
export default ExpenseContext;