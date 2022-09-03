import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Mantis Game - A Personal Project from Aaron Bray</h1>
        <p>Visit <a href='https://www.explodingkittens.com/products/mantis'>Exploding Kittens</a> to purchase this great game!</p>
      </div>
      {/*    --- Removed until later sprint to add in accounts
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
      */}
    </div>
  </header>
);

Header.propTypes = {
 
 user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  
};

Header.defaultProps = {
  user: null,
};
