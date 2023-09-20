import { configureStore } from "@reduxjs/toolkit"

import { formReducer, setCost, setItemName } from "./slices/formSlice";
import { expenseReducer, addExpense, removeExpense, setSearchTerm } from "./slices/expenseSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        expenses: expenseReducer
    }
})

export { 
    store,
    setCost,
    setItemName,
    addExpense,
    removeExpense,
    setSearchTerm
};