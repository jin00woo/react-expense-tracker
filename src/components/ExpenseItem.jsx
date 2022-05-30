import React from 'react';
import "./ExpenseItem.css"

function ExpenseItem(){
  const expenseDate = new Date(2022,5,30);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 123;

  
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
      <h2>{expenseTitle}</h2>
      <div className = "expense-item__price">$294.12</div>
      </div>
    </div>
    
  );
}

export default ExpenseItem;