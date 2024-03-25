import './Expenses.css'
import ExpenseItem from "./ExpenseItem.js"; 
import Card from '../UI/Card.js'
import ExpenseFilter from './ExpenseFilter.js';
import { useState } from 'react';
import ExpenseList from './ExpenseList.js';
function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChangerHandler = (selectedYear) =>{
      setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
  });
  //   const expenses = [
  //   { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
  //   { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10 },
  //   { id: "3", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
  //   { id: "4", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
  // ];
  
  
  return(
    <Card className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangerHandler} />
    <ExpenseList expenses={filteredExpenses}/>
    </Card>
  )
}

export default Expenses;