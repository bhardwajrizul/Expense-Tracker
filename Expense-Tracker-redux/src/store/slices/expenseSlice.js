import generateData from "../../utils/faker";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        data: generateData(),
        searchTerm: ''
    },
    reducers: {
        addExpense(state, action) {
            state.data.push({
                item: action.payload.itemName,
                cost: action.payload.cost
            })
        },
        removeExpense(state, action) {
            console.log(action.payload)
            const updatedData = state.data.filter(({item}) => item !== action.payload)
            state.data = updatedData;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
        }
    }
})

export const expenseReducer = expenseSlice.reducer;
export const { addExpense, removeExpense, setSearchTerm } = expenseSlice.actions;