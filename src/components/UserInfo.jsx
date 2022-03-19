import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function UserInfo({ currentUsers }) {
  return (
    <>
      <div>
        {currentUsers.map((user) =>{
          return(
            <div key={uuidv4()}>
              {user.lname}
            </div>
          )
        })}
      </div>
      <div>AEGHSDFKJLAHNSDK;JGHA;KJN</div>
    </>
  )
}
