import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';


class UserBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeDropdown: null
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)

  }

  sessionLinks() {
    return(
      <div>
        <button onClick={this.props.openSignup} className="signup-button">
          <a href="#">Sign up</a> 
        </button>
        <button onClick={this.props.openSignin} className="signin-button">
          <a href="#">Sign in</a> 
        </button>

      </div>
    )
  }

  personalGreeting() {
    return(
    <div>
      <div className="dropdown">
        <button className="dropbtn" onClick={()=>{this.toggleDropdown('calendar')}}>
          <i className="far fa-calendar-alt fa-2x"></i>
          {this.renderCalendarDropdown()}
        </button>
      </div>
      <div className="dropdown">
          <button className="dropbtn-dashboard" onClick={()=>{this.toggleDropdown('user')}}>
            <span className="user-bar-name-span">Hi, {`${this.props.currentUser.first_name}`}</span>
            <i className="fas fa-angle-down fa-lg"></i>
            {this.renderUserDropdown()}
          </button>
      </div>
    </div>
    )
  }

  renderCalendarDropdown() {
      if(this.state.activeDropdown === 'calendar'){
        return(
          <div className="dropdown-content calendar">
              <a href="#" >My Upcoming Reservations</a>
          </div>
        )
      }
  }

  renderUserDropdown() {
    if(this.state.activeDropdown === 'user') {
      return(
          <div className="dropdown-content">
             <a href="#" >My Profile</a>
             <a href="#" >My Dining History</a>
             <a href="#" >My Saved Restaurants</a>
             <a href="#" onClick={this.props.logout}>Sign Out</a>
          </div>
      )
    }
  }
  
  toggleDropdown(activeDropdown) {
    if(this.state.activeDropdown === activeDropdown){
      this.setState({ activeDropdown: null})
    } else {
      this.setState({ activeDropdown: activeDropdown})
    }
  }

  render() {
    if(this.props.currentUser){
      return this.personalGreeting()     
    } else {
      return this.sessionLinks()
    }
  }

}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
  openSignup: () => dispatch(openModal('signup')),
  openSignin: () => dispatch(openModal('signin')),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);