import React from 'react';
import { Link } from 'react-router-dom';

const loggedOutActions = () => (
  <div className="header-actions">
    <Link to="/signup">SIGN UP</Link>
    <Link to="/login">SIGN IN</Link>
  </div>
);

const loggedInActions = (currentUser, logout) => (
  <ul className="header-actions">
    <li>
      <button className="logout-btn" onClick={logout}>SIGN OUT</button>
    </li>
  </ul>
);

const HeaderActions = ({ currentUser, logout }) => (
  currentUser ? loggedInActions(currentUser, logout) : loggedOutActions()
);

export default HeaderActions;
