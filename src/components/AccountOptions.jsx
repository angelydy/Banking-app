import React from 'react'

export function AccountOptions({ passedUserInfo, onSelectAcc, selectedAcc, onSetAccLabel, selectedAccLabel }) {
  
  const handleChange = (e) => {
    onSelectAcc(e.target.value)
    onSetAccLabel('Selected Account')
  }

  return (
    <>
      <div className='chooseAccNum'>
        <label htmlFor="account-options">{selectedAccLabel}</label>
        <select required name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
          <option value="">- - Choose here - -</option>
            {passedUserInfo.map(user => {
              return (
                <option key={user.accNum} value={user.accNum}>
                {user.accNum}
                </option>
              )
            })}
        </select> 
      </div>
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
          <select required name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
            <option value="">- - Choose here - -</option>
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
          <select required name="account-options" id="account-options" value={selectedAcc} onChange={handleChange}>
            <option value="">- - Choose here - -</option>
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
