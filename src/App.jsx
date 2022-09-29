import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App(){
  const expenses = [
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
  
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;