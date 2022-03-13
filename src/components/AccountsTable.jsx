import React from 'react'
import {v4 as uuidv4} from 'uuid';

export default function AccountsTable(props) {
  const { passedUserInfo } = props
  return (
    <>
      <div id='accounts-table-wrapper'>
        <div className='account-table-title'>
          <div>Account No.</div>
          <div>Account Name</div>
          <div>Account Category</div>
          <div>Account Type</div>
          <div>Balance</div>
        </div>
        <div className='account-table-data'>
          <div className='account-table-account-no'>566566</div>
          <div className='account-table-account-name'>324144</div>
          <div className='account-table-account-category'>6787968</div>
          <div className='account-table-account-type'>434r3455</div>
          <div className='account-table-account-balance'>35475767</div>
        </div>
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
