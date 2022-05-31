import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredPrice: "",
    enteredDate: ""
  });
  
  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredName: event.target.value};
    });
  };

  const priceChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredPrice: event.target.value};
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredDate: event.target.value};
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: userInput.enteredName,
      price: userInput.enteredPrice,
      date: new Date(userInput.enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    
    setUserInput((prevState) => {
      return {
        enteredName: "",
        enteredPrice:"",
        enteredDate: ""
      }
    });
    
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" value={userInput.enteredName} onChange={nameChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredPrice} onChange={priceChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2030-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;