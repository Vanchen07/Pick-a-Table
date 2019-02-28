import React from 'react'
import UserBar from './user_bar'

class NavBar extends React.Component {

    render() {
        return(
            <div className='nav-bar'>
                <div className='nav-bar-heading'>Pick-A-Table</div>
                <UserBar/>
            </div>
        )
    }
}

export default NavBar