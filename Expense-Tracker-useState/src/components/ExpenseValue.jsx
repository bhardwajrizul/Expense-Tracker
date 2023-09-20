import PropTypes from 'prop-types'

export default function ExpenseValue({data, searchTerm}) {
    const totalCost = data
        .filter((expense) => expense.item.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc, expense) => acc + parseInt(expense.cost), 0)
    return (
        <div className="flex flex-row justify-end items-center border mx-8 mt-4 rounded-lg p-3">
            <h1 className="text-2xl font-mono p-2 text-gray-700">
                Total 
            </h1>
            <h1 className="text-2xl font-mono p-2 text-gray-700">
                - {totalCost}
            </h1> 
        </div>
    )
}

ExpenseValue.propTypes = {
    data: PropTypes.array,
    searchTerm: PropTypes.string
}