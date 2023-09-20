import PropTypes from 'prop-types';

function ExpenseSearch({searchTerm, onSearchChange}) {
    
    const handleSearchChange = (e) => {
        onSearchChange(e.target.value)
    }

    return (
        <div className="flex flex-row flex-wrap justify-between items-center border mx-8 mt-4 rounded-lg p-3">
            <h1 className="text-2xl font-mono p-2 text-gray-700">
                My Expenses
            </h1>
            <div className="flex flex-row items-center">
                <label className="text-base text-gray-700 me-2 font-bold">
                    Search
                </label>
                <input className="border rounded p-2" value={searchTerm} onChange={handleSearchChange} />
            </div>
        </div>
    )
}

export default ExpenseSearch;

ExpenseSearch.propTypes = {
    searchTerm: PropTypes.string,
    onSearchChange: PropTypes.func
}