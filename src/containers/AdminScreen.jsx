import React from 'react';
import AccountsTable from '../components/AccountsTable';
import AddAccountControl from '../components/AddAccountControl';
import WithdrawControl from '../components/WithdrawControl';
import DepositControl from '../components/DepositControl';
import TransferControl from '../components/TransferControl';
import Navbar from '../components/Navbar';
import './../css/index.css';

export default function AdminScreen() {
  const today = new Date();
  const hrs24 = today.getHours();

  function getHours(h) {
    if (h < 12) {
      return 'Good Morning, Admin';   
    } else if (h <= 18) {
      return 'Good Afternoon, Admin';
    } else {
      return 'Good Evening, Admin';
    }
  }

  return (
    <div>
      <Navbar />
      <h1 className='greeting'>{getHours(hrs24)}</h1>
      <section className="admin-wrapper">
        <AccountsTable />
        <AddAccountControl />
      </section>
      <section className='admin-wrapper-bottom'>
        <div className='withdraw-deposit-title'>
          <p>
            Withdraw
          </p>
          <p>
            Deposit
          </p>
        </div>
          <div className='withdraw-deposit'>
            <WithdrawControl displayFeature="enter-acc-no" />
            <DepositControl displayFeature="enter-acc-no" />
          </div>
          <div className='transfer-title'>
          <p>
            Transfer
          </p>
          </div>
          <div className='transfer'>
          <TransferControl displayFeature="enter-acc-no" />
          </div>
      </section>
    </div>
  );
}
