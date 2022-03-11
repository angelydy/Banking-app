import React from 'react';
import AccountsTable from '../components/AccountsTable';
import AddAccountControl from '../components/AddAccountControl';
import WithdrawControl from '../components/WithdrawControl';
import DepositControl from '../components/DepositControl';
import TransferControl from '../components/TransferControl';
import './../css/index.css';

export default function AdminScreen() {

  return (
    <section className="admin-wrapper">
      <AccountsTable />
      <AddAccountControl />
      <WithdrawControl displayFeature="enter-acc-no" />
      <DepositControl displayFeature="enter-acc-no" />
      <TransferControl displayFeature="enter-acc-no" />
    </section>
  );
}
