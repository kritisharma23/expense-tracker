import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Grocery",
    amount: 1000,
    date: new Date(2021, 7, 10),
  },
  {
    id: "e2",
    title: "Television",
    amount: 8000,
    date: new Date(2021, 7, 25),
  },
  {
    id: "e3",
    title: "Car",
    amount: 295000,
    date: new Date(2021, 7, 13),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 4500,
    date: new Date(2021, 7, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
