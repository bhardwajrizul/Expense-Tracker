import ExpenseContext from "../context/ExpenseContext";
import { useContext } from "react";

export default function useExpense() {
    return useContext(ExpenseContext);
}