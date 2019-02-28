import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';


const UserBar = ({ currentUser, logout, openSignup, openSignin}) => {
  const sessionLinks = () => (
    <nav className="user-bar-container">
      <button className='user-bar-button secondary'  onClick={openSignup}>
      <Link to="/signup">Sign up</Link>
      </button>
      <button className="user-bar-button"  onClick={openSignin}>
      <Link to="/login">Sign in</Link>
      </button>

    </nav>
  );
  const personalGreeting = () => (
    <nav className="user-bar-container">
      <h2 className="user-bar-name">Hi, {`${currentUser.first_name}`}</h2>
      <button className="user-bar-button" onClick={logout}>Sign Out</button>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
  openSignup: () => dispatch(openModal('signup')),
  openSignin: () => dispatch(openModal('signin')),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);