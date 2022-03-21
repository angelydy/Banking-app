import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function UserInfo({ currentUsers }) {
  return (
    <>
      <div className='user-info-wrapper'>
        <h1>Hi, Fname👋🏼</h1> 
        <h4>lname, fname</h4>
        <div className='accNum-accCategory'>
          <p>RP 12345678</p>
          <p>Parent</p>
          <p>Savings</p>
        </div>

         {/*currentUsers.map((user) =>{
          return(
            <div key={uuidv4()}>
              {user.lname}
            </div>
          )
        })*/} 

        
      </div>
    </>
  )
}
