import './ExpenseList.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';
const ExpenseList = (props) => {
    if(props.expenses.length === 0){
        return(
        <h3 className='expenses-list__fallback'>No Expenses Found</h3>
        )
    }

    else if(props.expenses.length === 1){
        return(
            <div>
            <ul className='expenses-list'>
                {props.expenses.map((expense) => 
                    (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        price={expense.price}
                    ></ExpenseItem>
                    )
                )}
            </ul>
            <h3 className='expense-list__oneItem'>Only single Expense here. Please add more...</h3>
            </div>
        )}
    return(
        <ul className='expenses-list'>
            {props.expenses.map((expense) => 
                (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                ></ExpenseItem>
                )
            )}
        </ul>
    )
}
export default ExpenseList;