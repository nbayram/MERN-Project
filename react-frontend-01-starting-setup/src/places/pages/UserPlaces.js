import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media2.trover.com/T/59f903fadf9738ec4c0205a3/fixedw_large_4x.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      let: -73.9878531
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media2.trover.com/T/5459955326c48d783f000450/fixedw_large_4x.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      let: -73.9878531
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />
}

export default UserPlaces
