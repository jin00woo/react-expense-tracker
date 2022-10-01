import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState("2022");
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return(
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}></ExpenseFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;