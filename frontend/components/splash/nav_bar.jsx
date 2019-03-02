import React from 'react'
import UserBar from './user_bar'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return(
            <div className='nav-bar'>
                <div className='nav-bar-heading'>
                <Link to='/'>
                <i className="fas fa-glass-cheers icon"></i>
                </Link>
                <Link to='/'>
                <span className="nav-bar-heading-text">Pick-A-Table</span>
                </Link>
                </div>
                <UserBar/>
            </div>
        )
    }
}   

export default NavBar