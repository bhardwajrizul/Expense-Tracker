import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import ExpenseSearch from "./components/ExpenseSearch";
import ExpenseValue from "./components/ExpenseValue";

import generateData from './utils/faker.js'

function App() {
  let randomData = generateData();
  

  const deleteExpense = (itemToDelete) => {
    // filter returns new Array
    
    setData(
      updatedData
    )
  }

  return (
    <div>
      <ExpenseForm />
      <ExpenseSearch />
      <ExpenseList />
      <ExpenseValue />
    </div>
  )
}

export default App;
