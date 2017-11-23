import React from 'react';
import { Link } from 'react-router-dom';

const loggedOutNav = () => (
  <nav className="logged-out-nav">
    <Link to="/signup">SIGN UP</Link>
    &nbsp;or&nbsp;
    <Link to="/login">SIGN IN</Link>
  </nav>
);

const loggedInNav = (currentUser, logout) => (
  <nav className="greeting-nav">
    <h2>Hi, {currentUser.username}</h2>
    <button className="logout-btn" onClick={logout}>SIGN OUT</button>
  </nav>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? loggedInNav(currentUser, logout) : loggedOutNav()
);

export default Greeting;
