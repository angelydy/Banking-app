// BudgetApp
import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default function UserExpenses({ accessingUser }) {
  const [userExpense, setUserExpense] = useState()
  const [expenseCost, setExpenseCost] = useState(0)
  const [currentExpenses, setCurrentExpenses] = useState([])
  const [balance, setBalance] = useState()
  let users = JSON.parse(localStorage.getItem("users"))

  useEffect(() => {
    let specificUserInfo = users.find(user => user.accNum == accessingUser)
    setCurrentExpenses(specificUserInfo.expenses)
    setBalance(specificUserInfo.balance)
  }, [])
  
  function handleExpenseInput(e) {
    setUserExpense(e.target.value.toLowerCase())
  }

  function handleExpenseCostInput(e) {
    setExpenseCost(Number(e.target.value))
  }

  function deleteExpense(selectedItem) {
    let users = JSON.parse(localStorage.getItem("users"))
    let accessingUserInfo = users.find(user => user.accNum == accessingUser)
    let expenseList = accessingUserInfo.expenses
    expenseList.find(list => {
      if(list.item == selectedItem) {
        accessingUserInfo.balance += list.cost
        setBalance(accessingUserInfo.balance)
      }
    })
    expenseList = expenseList.filter(each => each.item !== selectedItem)
    accessingUserInfo.expenses = expenseList
    localStorage.setItem("users", JSON.stringify(users))
    setCurrentExpenses(expenseList)
  }

  function handleSubmit(e) {
    e.preventDefault()
    users.find(user => {
      if(user.accNum == accessingUser) {
        let newUserExpense = {item: userExpense, cost: expenseCost}
        user.expenses.push(newUserExpense)
        setCurrentExpenses(user.expenses)
        user.balance -= expenseCost
        setBalance(user.balance)
        localStorage.setItem("users", JSON.stringify(users))
        alert('congrats')
      }
    })
    e.target.reset()
  }

  return (
    <>
      <div className='user-info-wrapper'>
        <div className='curr-balance'>
          <div className='budget-title'>BUDGET</div>
          <p className='balance-title'>Your Balance</p>
          <p className='balance-val'>{balance}</p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="expense-item">Add Expense Item</label>
            <input onChange={handleExpenseInput} type="text" name="expense-item" id="expense-item"/>
            <label htmlFor="expense-item-cost">Item Cost</label>
            <input onChange={handleExpenseCostInput} type="text" name="expense-item-cost" id="expense-item-cost"/>
            <button>Add</button>
            <button type='reset'>Reset</button>
          </form>
        </div>
        <div>Expense Item Name</div>
        {currentExpenses.map(list => {
          return (
            <div key={uuidv4()}>
              {list.item}
            </div>
          )
        })}
        <div>Expense Item Cost</div>
        {currentExpenses.map(list => {
          return (
            <div key={uuidv4()}>
              {list.cost}
            </div>
          )
        })}
        <div>Delete</div>
        {currentExpenses.map((list) => {
          return (
            <div key={uuidv4()}>
              <FontAwesomeIcon icon={faTrashCan} onClick={()=> deleteExpense(list.item)}/>
            </div>
          )
        })}
      </div>
    </>
  )
}
