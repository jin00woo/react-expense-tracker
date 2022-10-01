import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Sneakers",
      amount: 150,
      date: new Date(2020, 5, 26)
    },
    {
      id: "e2",
      title: "Car",
      amount: 30000,
      date: new Date(2022, 7, 18)
    },
    {
      id: "e3",
      title: "Football",
      amount: 100.56,
      date: new Date(2021, 5, 5)
    },
    {
      id: "e4",
      title: "Groceries",
      amount: 70.4,
      date: new Date(2022, 9, 9)
    }
  ];

function App(){
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;