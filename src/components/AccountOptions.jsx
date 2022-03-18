import React from 'react'

export function AccountOptions({ passedUserInfo, onSelectAcc, selectedAcc, onSetAccLabel, selectedAccLabel }) {
  
  const handleChange = (e) => {
    onSelectAcc(e.target.value)
    onSetAccLabel('Selected Account')
  }

  return (
    <>
      <label htmlFor="account-options">{selectedAccLabel}</label>
      <select required name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
          {passedUserInfo.map(user => {
            return (
              <option key={user.accNum} value={user.accNum}>
              {user.accNum}
              </option>
            )
          })}
      </select> 
    </>
  )
}

export function AccountOptionsTransferFrom({ passedUserInfo, onSelectAcc, selectedAcc, onSetAccLabel, selectedAccLabel }) {
  
  const handleChange = (e) => {
    onSelectAcc(e.target.value)
    onSetAccLabel('Selected Sender Account')
  }

  return (
    <>
      <label htmlFor="account-options">{selectedAccLabel}</label>
      <select required name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
          {passedUserInfo.map(user => {
            return (
              <option key={user.accNum} value={user.accNum}>
              {user.accNum}
              </option>
            )
          })}
      </select> 
    </>
  )
}

export function AccountOptionsTransferTo({ passedUserInfo, onSelectAcc, selectedAcc, onSetAccLabel, selectedAccLabel }) {
  
  const handleChange = (e) => {
    onSelectAcc(e.target.value)
    onSetAccLabel('Selected Receiver Account')
  }

  return (
    <>
      <label htmlFor="account-options">{selectedAccLabel}</label>
      <select required name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
          {passedUserInfo.map(user => {
            return (
              <option key={user.accNum} value={user.accNum}>
              {user.accNum}
              </option>
            )
          })}
      </select> 
    </>
  )
}
