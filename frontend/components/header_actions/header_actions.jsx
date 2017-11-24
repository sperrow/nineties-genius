import React from 'react';
import SessionModal from './session_modal';

const loggedOutActions = () => (
  <div className="header-actions">
    <SessionModal formType="signup" />
    <SessionModal formType="login" />
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
