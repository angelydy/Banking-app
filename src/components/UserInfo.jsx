import React from 'react'
import ChildBalance from './ChildBalance';

export default function UserInfo({ accessingUser, passedName, passedUserName, passedAccCateg, passedAccType, ifParent, passedChildAccNum, passedChildName, ifHasChildren, passedChildArray }) {
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
          <p>Account Number<br></br>{accessingUser}</p>
          <p>Account Category<br></br>{passedAccCateg}</p>
          <p>Account Type<br></br>{passedAccType}</p>
        </div>
      </div>
      <div className='child-container'>
        {ifParent === true &&
          <ChildBalance 
          passedChildAccNum={passedChildAccNum} 
          passedChildName={passedChildName} 
          ifHasChildren={ifHasChildren}
          passedChildArray={passedChildArray}
        />
        }
      </div>
    </>
  )
}
