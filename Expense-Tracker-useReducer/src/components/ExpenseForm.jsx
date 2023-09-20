import useExpense from '../hooks/useExpense'
import PropTypes from 'prop-types'
import Button from "./Button";

import { SET_ITEM_NAME, SET_COST, ADD_DATA } from '../context/ActionTypes';

export default function ExpenseForm() {

    const {state: {itemName, cost}, dispatch} = useExpense();

    const handleNameChange = (event) => {
        dispatch({
            type: SET_ITEM_NAME,
            payload: event.target.value
        })
    }

    const handleCostChange = (event) => {
        dispatch({
            type: SET_COST,
            payload: parseInt(event.target.value)
        })
    }
    const addExpense = () => {
        dispatch({
            type: ADD_DATA,
            payload: {
                item: itemName,
                cost: cost
            }
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        itemName && cost 
            ? addExpense() 
            : console.log('Add Data')
    }

    return (
        <div className="flex flex-col flex-wrap border mx-8 my-4 rounded-lg p-3">
            <h1 className="text-2xl font-mono p-2 text-gray-700">
                Add Expense
            </h1>
            <form className="p-2 flex flex-row flex-wrap items-center" onSubmit={handleFormSubmit}>
                <div className="flex flex-row items-center me-2">
                    <label className="text-base text-gray-700 me-2 font-bold">
                        Item
                    </label>
                    <input className="border rounded p-2" value={itemName} onChange={handleNameChange}/>
                </div>
                <div className="flex flex-row items-center">
                    <label className="text-base text-gray-700 me-2 font-bold">
                        Cost
                    </label>
                    <input className="border rounded p-2" value={cost || ''} onChange={handleCostChange}/>
                </div>
                <Button> Submit</Button>
            </form>
        </div>
    )
}

ExpenseForm.propTypes = {
    addExpense: PropTypes.func
}