import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import ExpenseSearch from "./components/ExpenseSearch";
import ExpenseValue from "./components/ExpenseValue";

import generateData from './utils/faker.js'

function App() {

  return (
    <div>
      <ExpenseForm />
      <ExpenseSearch />
      <ExpenseList />
      <ExpenseValue />
    </div>
  )
}

export default App
