import { useState } from "react"
import PropTypes from 'prop-types'
import Button from "./Button";

export default function ExpenseForm({addExpense}) {
    const [itemName, setItemName] = useState("")
    const [cost, setCost] = useState(0);
    const handleNameChange = (event) => {
        setItemName(event.target.value);
    }

    const handleCostChange = (event) => {
        setCost(parseInt(event.target.value))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        itemName && cost 
            ? addExpense({item: itemName, cost: cost}) 
            : console.log('Add Data')
        setItemName('')
        setCost(0)
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