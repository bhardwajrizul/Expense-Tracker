import { SET_SEARCH_TERM, SET_COST, ADD_DATA, SET_ITEM_NAME, DELETE_DATA } from "./ActionTypes";

export default function ExpenseReducer(state, action) {
    switch (action.type) {
        case SET_ITEM_NAME:
            return {
                ...state ,
                itemName: action.payload
            };
        case SET_COST:
            return {
                ...state,
                cost: action.payload
            };
        case ADD_DATA:
            return {
                ...state,
                itemName: '',
                cost: 0,
                data: [...state.data, action.payload]
            } 
        case DELETE_DATA:
            let updatedData = state.data.filter(({item}) => item !== action.payload)
            return {
                ...state,
                data: updatedData
            }
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state;
    }
}