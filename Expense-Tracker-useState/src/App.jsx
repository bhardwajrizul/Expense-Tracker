import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"

import generateData from './utils/faker.js'
import ExpenseSearch from "./components/ExpenseSearch";
import ExpenseValue from "./components/ExpenseValue";

function App() {
  let randomData = generateData();
  const [data, setData] = useState(randomData);
  const [searchTerm, setSearchTerm] = useState('')

  const addExpense = (newExpense) => {
    setData(
      [...data, newExpense]
    )
  }

  const deleteExpense = (itemToDelete) => {
    let updatedData = data.filter(({item}) => item !== itemToDelete)
    setData(
      updatedData
    )
  }



  return (
    <div>
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseList searchTerm={searchTerm} data={data} deleteExpense={deleteExpense} />
      <ExpenseValue data={data} searchTerm={searchTerm} />
    </div>
  )
}

export default App
