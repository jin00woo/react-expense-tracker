import Expenses from "./components/Expenses";

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
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;