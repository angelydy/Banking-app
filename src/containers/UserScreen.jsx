import React from 'react'
import UserInfo from '../components/UserInfo';
import './../css/index.css';

export default function UserScreen() {
  const users = JSON.parse(localStorage.getItem("users"))

  return (
    <section className='user-wrapper'>
      <UserInfo currentUsers={users}/>
    </section>
  );
}
