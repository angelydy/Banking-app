import React from 'react'
import ChildBalance from './ChildBalance';

export default function UserInfo({ accessingUser, passedName, passedUserName, passedAccCateg, passedAccType, passedBalance, ifParent, passedChildAccNum, passedChildName, passedChildBalance, ifHasChildren }) {
  const today = new Date();
  const hrs24 = today.getHours();

  function getHours(h) {
    if (h < 12) {
      return `Good Morning, ${passedUserName} 👋🏼`
    } else if (h <= 18) {
      return `Good Afternoon, ${passedUserName} 👋🏼`
    } else {
      console.log(passedChildAccNum)
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
      <div className='curr-balance'>
        <p className='balance-title'>Your Balance</p>
        <p className='balance-val'>{passedBalance}</p>
        <div className='curr-status'>
          <p>Currency</p>
          <p>Status</p>
        </div>
        <div className='curr-status-val'>
          <p>PHP <span><img src="https://img.icons8.com/color/20/000000/philippines-circular.png"/></span></p>
          <p>Active</p>
        </div>
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
