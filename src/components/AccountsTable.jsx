import React from 'react'
import {v4 as uuidv4} from 'uuid';

export default function AccountsTable(props) {
  const { passedUserInfo } = props
  return (
    <>
      <h1>Accounts Overview</h1>
      <div id='accounts-table-wrapper'>
        <div>Account No.</div>
        <div>Account Name</div>
        <div>Account Category</div>
        <div>Account Type</div>
        <div>Balance</div>
      </div>
      <div className='user-info-wrapper'>
        <div className='acc-num-wrap'>
          {passedUserInfo &&
            passedUserInfo.map((user) =>{
              return (
                <div key={uuidv4()}>
                  {user.accNum}
                </div>
              )
            })}
        </div>
        <div className='acc-name-wrap'>
          {passedUserInfo &&
            passedUserInfo.map((user) =>{
              return (
                <div key={uuidv4()}>
                  {user.lname} {user.fname} {user.mname}
                </div>
              )
            })}
        </div>
        <div className='acc-category-wrap'>

        </div>
        <div className='acc-type-wrap'>

        </div>
        <div className='acc-init-deposit-wrap'>

        </div>
      </div>
    </>
  );
}
