import { createSlice } from "@reduxjs/toolkit";

import { addExpense } from "./expenseSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        itemName: '',
        cost: 0
    },
    reducers: {
        setItemName(state, action) {
            state.itemName = action.payload
        },
        setCost(state, action) {
            state.cost = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addExpense, (state, action) => {
            state.itemName = ''
            state.cost = 0
        });
    }
})

export const formReducer = formSlice.reducer;
export const { setItemName, setCost } = formSlice.actions;