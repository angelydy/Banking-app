import React from 'react'
import {v4 as uuidv4} from 'uuid';

export default function AccountsTable(props) {
  const { passedUserInfo } = props
  return (
    <>
      <div id='accounts-table-wrapper'>
        <div className='account-table-data'>
          <div className='account-table-account-no'>
          <div className='table-title'>Account No.</div>
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
          <div className='table-title'>Account Name</div>
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
          <div className='table-title'>Account Category</div>
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
          <div className='table-title'>Account Type</div>
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
          <div className='table-title'>Balance</div>
            {passedUserInfo &&
              passedUserInfo.map((user) =>{
                return (
                  <div key={uuidv4()}>
                    {user.balance}
                  </div>
                )
              })}
          </div>

          <div className='account-table-account-delete'>
          <div className='table-title'>Delete</div>
            {passedUserInfo && passedUserInfo.map((user) =>{
                return (
                  <div key={uuidv4()}>
                    <i class="fa-solid fa-circle-trash"></i> 
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  );
}
