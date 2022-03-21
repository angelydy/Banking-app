import React from 'react'

export default function UserInfo({ accessingUser, passedName, passedUserName, passedAccCateg, passedAccType, passedBalance, ifHaveChildren }) {
  const today = new Date();
  const hrs24 = today.getHours();

  function getHours(h) {
    if (h < 12) {
      return `Good Morning, ${passedUserName} 👋🏼`
    } else if (h <= 18) {
      return `Good Afternoon, ${passedUserName} 👋🏼`
    } else {
      return `Good Evening, ${passedUserName} 👋🏼`
    }
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
      {ifHaveChildren === true &&
        <div className='user-info-wrapper'>Children</div>
      }
      <div className='curr-balance'>
            <p className='balance-title'>Your Balance</p>
            <p className='balance-val'>{passedBalance}</p>
            <div className='curr-status'>
              <p>Currency</p>
              <p>Status</p>
            </div>
            <div className='curr-status-val'>
              <p>PHP / Peso</p>
              <p>Active</p>
            </div>
          </div>
    </>
  )
}
