// BudgetApp
import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import capitalizeLetters from '../utils/capitalizeLetters';
import AlertModals from './AlertModals';

export default function UserExpenses({ accessingUser, passedBalance, setPassedBalance, passedHistory, setPassedHistory }) {
  const [userExpense, setUserExpense] = useState()
  const [expenseCost, setExpenseCost] = useState(0)
  const [currentExpenses, setCurrentExpenses] = useState([])
  const [expenseExists, setExpenseExists] = useState(false)
  const [itemAmountInvalid, setItemAmountInvalid] = useState(false)
  const [expenseExistsAlert, setExpenseExistsAlert] = useState(false)
  const [successfulAdd, setSuccesfulAdd] = useState(false)
  let users = JSON.parse(localStorage.getItem("users"))
  const date = new Date().toLocaleString().split(',')[0]
  const hours = new Date().getHours()
  var mins = new Date().getMinutes()
  mins = mins > 9 ? mins : '0' + mins
  const time = `${date} ${hours}:${mins}`

  useEffect(() => {
    let specificUserInfo = users.find(user => user.accNum == accessingUser)
    setCurrentExpenses(specificUserInfo.expenses)
  }, [])
  
  function handleExpenseInput(e) {
    currentExpenses.find(each => {
      if(each.item == capitalizeLetters(e.target.value.trim())) {
        setExpenseExists(true)
      }
    })
    setUserExpense(capitalizeLetters(e.target.value.trim()))
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
        setPassedBalance(accessingUserInfo.balance)
        let newHistory = `${accessingUserInfo.lname} ${accessingUserInfo.fname} removed ${list.item} worth ₱${list.cost} on ${time}.`
        setPassedHistory([...passedHistory, {accNum: accessingUser, history: newHistory}])
      }
    })
    expenseList = expenseList.filter(each => each.item !== selectedItem)
    accessingUserInfo.expenses = expenseList
    localStorage.setItem("users", JSON.stringify(users))
    setCurrentExpenses(expenseList)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(!userExpense || expenseCost <= 0) {
      setItemAmountInvalid(true)
      e.target.reset()
      resetState()
      return
    }
    if(expenseExists == true) {
      setExpenseExistsAlert(true)
      e.target.reset()
      resetState()
      return
    }
    users.find(user => {
      if(user.accNum == accessingUser) {
        let newUserExpense = {item: userExpense, cost: expenseCost}
        user.expenses.push(newUserExpense)
        setCurrentExpenses(user.expenses)
        user.balance -= expenseCost
        setPassedBalance(user.balance)
        let newHistory = `${user.lname} ${user.fname} added ${userExpense} worth ₱${expenseCost} on ${time}.`
        setPassedHistory([...passedHistory, {accNum: accessingUser, history: newHistory}])
        localStorage.setItem("users", JSON.stringify(users))
        setSuccesfulAdd(true)
      }
    })
    e.target.reset()
    resetState()
  }

  function resetState() {
    setUserExpense()
    setExpenseCost(0)
    setExpenseExists(false)
  }

  return (
    <>
      <div className='budget-app-wrapper'>
        <div className='curr-balance'>
          <div className='budget-title'>BUDGET</div>
          <p className='balance-title'>Your Balance</p>
          <p className='balance-val'>{passedBalance}</p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div>
            <label htmlFor="expense-item">Add Expense Item</label>
            <br />
            <input required onChange={handleExpenseInput} type="text" name="expense-item" id="expense-item"/>
            </div>
            <div>
            <label htmlFor="expense-item-cost">Item Cost</label>
            <br />
            <input required onChange={handleExpenseCostInput} type="number" name="expense-item-cost" id="expense-item-cost"/>
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
      <AlertModals 
        displayState={itemAmountInvalid ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> itemAmountInvalid ? setItemAmountInvalid(false) : setItemAmountInvalid(true)}
        boldAlert={'OOPS!'}
        message={"Sorry, the item/amount is invalid."}
        image={"https://img.icons8.com/cotton/50/000000/error--v4.png"}
      />
      <AlertModals 
        displayState={expenseExistsAlert ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> expenseExistsAlert ? setExpenseExistsAlert(false) : setExpenseExistsAlert(true)}
        boldAlert={'OOPS!'}
        message={"Sorry, the item is already listed."}
        image={"https://img.icons8.com/cotton/50/000000/error--v4.png"}
      />
      <AlertModals
        displayState={successfulAdd ? "alert-modal-wrapper show" : "alert-modal-wrapper"}
        closeState={()=> successfulAdd ? setSuccesfulAdd(false) : setSuccesfulAdd(true)}
        boldAlert={'GREAT!'}
        message={"The expense item is added successfully."}
        image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVRoge2ZTWgWRxjH/5Ok0RgkaUIRLVhoTTBGSUHjB6X21DbQWw8VWvSgnlRayUV6U3oWeqqIoF4EEb96a7WFNGLIRWhLiii2IJooIcZETOtH4q+HfZYsL8mb3dnZNxHyvzxk33n+83t2drKzM9KiFlWIXFHGwBpJWyS1SmqUNCVpRFK/pF7n3GRRfecWUA3sBgYorzvA9pB9BxsRYKWkC5K22aUhSdclDUq6Z9fekdSlaJT+k3RK0hnnXF8ojlwCGoFbdrdvA58BM94koAo4WjJCZ4FlleaeCe60Ad0AGlK0rwLWAQeBYcu9WAnWclCrgUngJdDhkf8uMGrFdBXBmBZkn0FcyOFxOH7EQrJlhbhkEHtyeLSZx98h2bJC9BvE1hwe1cAz4JXvpK/y7TyhZotjvgbOuSlJzxW9Dmp9PEIUEr+hyelTY/GVT3KIQoYtrvA1AJokLZM04Zx74uMRopAHFlfl8Gix+I+vQYhC/rSY+R2S0IcWr/sahCjkhsXNOTw+snjN1yBEIbFHJ1BTtuUMAmo1PSLjAXj8BPTYe+TQbAvFOfId8K15/FIEY1qQmwbhPUeADvP4y9cjxKM1YHFjDo9Oi96F5Bawy+7mXaDbI7/bcgF2FsGYFqQaOG/rpHEg9Sjbd8l4vHoGqotkTQv1uwG1Z8jZYDk38/YfYo7E+s3iVxlyvizJnX8BG+3ujgJvpWjfBDyynA8qwZhawGUD6wGay7RbDvxsba9WkjGVgLeBh3N9aAFrrc0Y8F6IvkPOETnnBhXtY6Xtd8Q5F+TzNmghpjRfePFH2JJQnRZRyFKLT8u0mbC4MAsBVkhaaX+WW8mOKxqVBmB1SIbcspfbHzaJf0rR/lz8MgQ2VYJxLqB24BjwwsBuE21oz5XXzPSu/SRwEni/EsxJiBrgc+BXW2MBTBHtATdm8FkOnLDcWNeAL4A3iixgKXCA6dUqwARwHFifw7cN+AF4mvC9D3wD1IUswBEd4AwmOhoAvgbeDNhPA7A/MdcAhoC9eHx9lprXAz8mjPupwK458DHQl+j3MlDva7YE6DWjEWBHYN40DDsTj1wv0WZFZpPvzeAe0FoAZ1qODcYAcDRrcgvR4c0UsKUgxiw8W43lBdGJcerE7+wOXCmQL5OAq8Z0pPS3ckuUTyxeKgbLS/E546elP8z6Lw14rOigfyHqsXOuKXlhtiPkOkn/VgTJX3XOuWfzDbGoRb0u+h/xDJ/HHlzXCgAAAABJRU5ErkJggg=="}
      />
    </>
  )
}
