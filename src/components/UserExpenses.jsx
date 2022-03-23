// BudgetApp
import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default function UserExpenses({ accessingUser }) {
  const [userExpense, setUserExpense] = useState()
  const [expenseCost, setExpenseCost] = useState(0)
  const [currentExpenses, setCurrentExpenses] = useState([])
  let users = JSON.parse(localStorage.getItem("users"))
  let accessingUserInfo = JSON.parse(localStorage.getItem("loggedUserInfo"))

  useEffect(() => {
    setCurrentExpenses(accessingUserInfo.expenses)
  }, [])
  
  function deleteExpense(selectedItem) {
    const updatedExpenses = accessingUserInfo.expenses.filter(each => each.item !== selectedItem)
    accessingUserInfo.expenses.find(list => {
      if(list.item == selectedItem) {
        accessingUserInfo.balance += list.cost
      }
    })
    setCurrentExpenses([...updatedExpenses])
  }

  function handleExpenseInput(e) {
    setUserExpense(e.target.value)
  }

  function handleExpenseCostInput(e) {
    setExpenseCost(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    users.find(user => {
      if(user.accNum == accessingUser) {
        let newUserExpense = {item: userExpense, cost: expenseCost}
        user.expenses.push(newUserExpense)
        setCurrentExpenses(user.expenses)
        user.balance -= expenseCost
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("loggedUserInfo", JSON.stringify(user))
        alert('congrats')
      }
    })
    e.target.reset()
  }

  return (
    <>
      <div className='budget-app-wrapper'>
        <div className='curr-balance'>
          <div className='budget-title'>BUDGET</div>
          <p className='balance-title'>Your Balance</p>
          <p className='balance-val'>{accessingUserInfo.balance}</p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div>
            <label htmlFor="expense-item">Add Expense Item</label>
            <br />
            <input onChange={handleExpenseInput} type="text" name="expense-item" id="expense-item"/>
            </div>
            <div>
            <label htmlFor="expense-item-cost">Item Cost</label>
            <br />
            <input onChange={handleExpenseCostInput} type="text" name="expense-item-cost" id="expense-item-cost"/>
            </div>
            <div className='expense-btns'>
            <button>Add</button>
            <button type='reset'>Reset</button>
            </div>
          </form>
        </div>
        <div className='expenses-table'>
          <div className='expenses-table-data'>
            <div className='expenses-table-items'>
              <div className='expense-table-title'>Expense Item Name</div>
              {currentExpenses.map(list => {
                return (
                <div key={uuidv4()}>
                  {list.item}
                </div>
                )
              })}
            </div>
            <div className='expenses-table-cost'>
              <div className='expense-table-title'>Expense Cost</div>
              {currentExpenses.map(list => {
                return (
                <div key={uuidv4()}>
                  {list.cost}
                </div>
              )
              })}
            </div>
            <div className='expenses-table-delete'>
              <div className='expense-table-title'>Delete</div>
              {currentExpenses.map((list) => {
                return (
                <div key={uuidv4()} className="expense-delBtn">
                  <FontAwesomeIcon icon={faTrashCan} onClick={()=> deleteExpense(list.item)}/>
                </div>
              ) 
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
