import React from 'react';
import UserList from '../components/UsersList';

const Users = () => {

  const USERS = [
    {
      id: 'u1',
      name: 'Nurullah Bayram',
      image: 'https://source.unsplash.com/600x400/?cat%20%20%20%20%20%20%20&__cacheBuster=1582234309654',
      places: 3
    }
  ];

  return <UserList items={USERS} />
}

export default Users
