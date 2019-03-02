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
      <div className="dropdown">
        <button className="dropbtn">
          <i class="far fa-calendar-alt fa-2x"></i>
          <div className="dropdown-content">
            <a href="#" >My Upcoming Reservations</a>
          </div>
        </button>
      </div>
      <div className="user-bar-name">
        Hi, {`${currentUser.first_name}`}
      </div>
      <div className="dropdown">
       <button className="dropbtn">
         <i class="fas fa-angle-down fa-2x"></i>
         <div className="dropdown-content">
           <a href="#" >My Profile</a>
           <a href="#" >My Dining History</a>
           <a href="#" >My Saved Restaurants</a>
           <a href="#" onClick={logout}>Sign Out</a>
          </div>
        </button>
      </div>
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