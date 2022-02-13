import React from 'react';
import { useSelector } from 'react-redux';
import LoggedIn from './LoggedIn/LoggedIn';
import LoggedOut from './LoggedOut/LoggedOut';

const Home = () => {
  const user = useSelector((state) => state.user);

  return <div>{user ? <LoggedIn /> : <LoggedOut />}</div>;
};

export default Home;
