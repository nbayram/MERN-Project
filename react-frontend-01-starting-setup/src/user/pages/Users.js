import React from 'react';

import UserList from '../components/UsersList';

const Users = () => {

  const USERS = [
    {
      id: 'u1',
      name: 'Nurullah Bayram',
      image: 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23595_hires.jpg',
      places: 3
    }
  ];

  return <UserList items={USERS} />
}

export default Users
