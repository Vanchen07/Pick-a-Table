import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux'

const UserBar = ({ currentUser, logout, openSignup, openSignin }) => {
  const sessionLinks = () => (
    <nav className="user-bar-container">
      <button className='user-bar-button secondary'  onClick={openSignup}>
      <Link to="/signup">Sign up</Link>
      </button>
      <button className='user-bar-button'  onClick={openSignin}>
      <Link to="/login">Sign in</Link>
      </button>

    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="user-bar-container">
      <h2 className="user-bar-name">Hi, {currentUser.first_name}!</h2>
      <button className="user-bar-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

const mapDispatchToProps = dispatch => ({
  openSignup: () => dispatch(openModal('signup')),
  openSignin: () => dispatch(openModal('signin'))
})

export default connect(null, mapDispatchToProps)(UserBar);