
import './ExpenseForm.css'
import React, {useState} from 'react';


const ExpenseForm = (props) => {

    // for changing title
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [formOpen, setFormOpen] = useState(false)

    const titleChanger = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChanger = (e) => {
        setEnteredAmount(e.target.value)
    }
    
    const dateChanger = (e) =>{
        setEnteredDate(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setFormOpen(true)
    }
    
    const toggle = () => {
        setFormOpen((prev) => !prev)
    }

    const cancel = () => {
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setFormOpen(false)
    }

    return(
        <div>
        {!formOpen && <button onClick={toggle}>Add Expenses</button>}
        {formOpen && (<form onSubmit={formSubmit}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChanger}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" value={enteredAmount} onChange={amountChanger}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChanger}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='reset'  value='reset' onClick={cancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>)}
        </div>
    )
}   

export default ExpenseForm;