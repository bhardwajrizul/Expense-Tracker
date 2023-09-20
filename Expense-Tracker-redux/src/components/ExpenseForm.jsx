import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import Button from "./Button";

import { setCost, setItemName, addExpense } from '../store';

export default function ExpenseForm() {
    const dispatch = useDispatch();
    const {itemName, cost} = useSelector((state) => {
        return {
            itemName: state.form.itemName,
            cost: state.form.cost
        }
    })

    const handleNameChange = (e) => {
        dispatch(setItemName(e.target.value))
    }

    const handleCostChange = (e) => {
        dispatch(setCost(parseInt(e.target.value)))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        itemName && cost ? dispatch(addExpense({itemName, cost})) : alert('Fill all the fields')
    }

    return (
        <div className="flex flex-col shadow-lg flex-wrap border mx-8 my-4 rounded-lg p-3">
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