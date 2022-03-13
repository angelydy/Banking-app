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
          <div className='account-table-account-no'>
            {passedUserInfo &&
              passedUserInfo.map((user) =>{
                return (
                  <div key={uuidv4()}>
                    {user.accNum}
                  </div>
                )
              })}
          </div>
          <div className='account-table-account-name'>
            {passedUserInfo &&
              passedUserInfo.map((user) =>{
                return (
                  <div key={uuidv4()}>
                    {user.lname} {user.fname} {user.mname}
                  </div>
                )
              })}
          </div>
          <div className='account-table-account-category'>
            {passedUserInfo &&
              passedUserInfo.map((user) =>{
                return (
                  <div key={uuidv4()}>
                    {user.acccateg}
                  </div>
                )
              })}
          </div>
          <div className='account-table-account-type'>
            {passedUserInfo &&
              passedUserInfo.map((user) =>{
                return (
                  <div key={uuidv4()}>
                    {user.acctype}
                  </div>
                )
              })}
          </div>
          <div className='account-table-account-balance'>
            {passedUserInfo &&
              passedUserInfo.map((user) =>{
                return (
                  <div key={uuidv4()}>
                    {user.balance}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  );
}
