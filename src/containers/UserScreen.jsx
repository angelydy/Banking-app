import React from 'react'
import UserInfo from '../components/UserInfo';
import DepositControl from '../components/DepositControl';
import TransferControl from '../components/TransferControl';
import WithdrawControl from '../components/WithdrawControl';
import Navbar from '../components/Navbar';
import './../css/index.css';

export default function UserScreen() {
  return (
    <section className='user-wrapper'>
      <Navbar />
      <UserInfo />
      <WithdrawControl displayFeature="enter-acc-no hide" />
      <DepositControl displayFeature="enter-acc-no hide" />
      <TransferControl displayFeature="enter-acc-no hide"/>
    </section>
  );
}
