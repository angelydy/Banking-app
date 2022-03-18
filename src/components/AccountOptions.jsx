import React from 'react'

export function AccountOptions({ passedUserInfo, onSelectAcc, selectedAcc, onSetAccLabel, selectedAccLabel }) {
  
  const handleChange = (e) => {
    onSelectAcc(e.target.value)
    onSetAccLabel('Selected Account')
  }

  return (
    <>
      <label htmlFor="account-options">{selectedAccLabel}</label>
      <br></br>
      <select name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
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
      <div className='transferOptions'>
        <label htmlFor="account-options">{selectedAccLabel}</label>
        <div>
          <select name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
            {passedUserInfo.map(user => {
              return (
                <option key={user.accNum} value={user.accNum}>
                {user.accNum}
                </option>
              )
            })}
          </select> 
        </div>
      </div>
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
      <div className='transferOptions'>
        <label htmlFor="account-options">{selectedAccLabel}</label>
          <div>
          <select name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
            {passedUserInfo.map(user => {
              return (
                <option key={user.accNum} value={user.accNum}>
                {user.accNum}
                </option>
              )
            })}
          </select> 
        </div>
      </div>
    </>
  )
}
