import React, { useState } from 'react'
import ChildBalance from './ChildBalance';

export default function UserInfo({ accessingUser, passedName, passedUserName, passedAccCateg, passedAccType, passedBalance, ifParent, passedChildAccNum, passedChildName, passedChildBalance, ifHasChildren }) {
  const today = new Date();
  const hrs24 = today.getHours();
  const [userExpense, setUserExpense] = useState([])
  const [expenseCost, setExpenseCost] = useState([])
  let users = JSON.parse(localStorage.getItem("users"))

  function getHours(h) {
    if (h < 12) {
      return `Good Morning, ${passedUserName} 👋🏼`
    } else if (h <= 18) {
      return `Good Afternoon, ${passedUserName} 👋🏼`
    } else {
      return `Good Evening, ${passedUserName} 👋🏼`
    }
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
        localStorage.setItem('users', JSON.stringify(users))
        alert('congrats')
      }
    })
    e.target.reset()
  }

  return (
    <>
      <div className='user-info-wrapper'>
        <h1>{getHours(hrs24)}</h1> 
        <h4>{passedName}</h4>
        <div className='accNum-accCategory'>
          <p>{accessingUser}</p>
          <p>{passedAccCateg}</p>
          <p>{passedAccType}</p>
        </div>
      </div>
      <div className='curr-balance'>
        <p className='balance-title'>Your Balance</p>
        <p className='balance-val'>{passedBalance}</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="expense-item">Add Expense Item</label>
          <input onChange={handleExpenseInput} type="text" name="expense-item" id="expense-item"/>
          <label htmlFor="expense-item-cost">Item Cost</label>
          <input onChange={handleExpenseCostInput} type="text" name="expense-item-cost" id="expense-item-cost"/>
          <button>Add</button>
          <button type='reset'>Reset</button>
        </form>
      </div>
      {ifParent === true &&
        <ChildBalance 
          passedChildAccNum={passedChildAccNum} 
          passedChildName={passedChildName} 
          passedChildBalance={passedChildBalance}
          ifHasChildren={ifHasChildren}
        />
      }
    </>
  )
}
