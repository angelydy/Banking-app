import React from 'react'

export default function AddAccountControl() {
  return (
    <section className='add-account-control-wrapper'>
      <label htmlFor="lastname">Last Name</label>
      <input type="text" name='lastname' />
      <label htmlFor="middlename">Middle Name</label>
      <input type="text" name='middlename' />
      <label htmlFor="firstname">First Name</label>
      <input type="text" name='firstname' />
      <div>
        <label htmlFor="acc-category">Account Category</label>
        <input type="radio" value="Parent" name='acc-category'/> Parent
        <input type="radio" value="Child" name='acc-category'/> Child
      </div>
      <div>
        <label htmlFor="acc-type">Account Type</label>
        <input type="radio" value="Savings" name='acc-type'/> Savings
        <input type="radio" value="Checking" name='acc-type'/> Checking
      </div>
      <label htmlFor="initial-deposit">Initial Deposit (Optional)</label>
      <input type="number" name='initial-deposit' />
    </section>
  )
}
