import { DELETE_DATA } from "../context/ActionTypes";
import useExpense from "../hooks/useExpense"
import Button from "./Button"

export default function ExpenseList() {


    const {state: {data, searchTerm}, dispatch} = useExpense();

    const deleteExpense = (expense) => {
        dispatch({
            type: DELETE_DATA,
            payload: expense
        })
    }

    const filteredExpenses = data.filter((expense) => {
        return expense.item.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const renderedExpenses = filteredExpenses.map((expense) => {
        const bold = searchTerm && searchTerm.toLowerCase().includes(searchTerm.toLowerCase())
        return (
            <div key={expense.item}>
                <div className={`flex flex-row p-4 flex-wrap items-start`}>
                    <div className="flex flex-row flex-wrap">
                        <p className={`text-lg font-mono p-2 text-gray-700 ${bold && "font-bold"}`}>{expense.item}</p>
                        <div className="flex flex-row items-center">
                            <p className="text-lg font-mono p-2 text-gray-700 font-bold">Cost - </p>
                            <p className="text-lg font-mono p-2 text-gray-700">{expense.cost}</p>
                        </div>
                    </div>
                    <Button onClick={() => deleteExpense(expense.item)} className="bg-red-500 hover:bg-red-700"> Delete </Button>
                </div>
            </div>
        )
    })

 

    return (
        <div className="flex flex-col  mx-8 mb-4 rounded-lg border">
            {renderedExpenses}
        </div>
    )
}