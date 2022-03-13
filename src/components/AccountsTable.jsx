import React from 'react'

export default function AccountsTable() {
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
    </>
  );
}
