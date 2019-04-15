import React from 'react'
import UserBar from './user_bar'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {  
        return(
            <div className='nav-bar'>
                <div className='top-bar'>
                </div>
                <div className='bar-heading'>
                    <div className="bar-heading-left">
                        <div>
                            <Link to='/' className="cheers-logo icon"><i class="fas fa-cookie fa-2x"></i></Link>
                        </div>
                        <div>
                            <Link to='/' className="secondary">OpenTable</Link>
                        </div>
                        <div className="location-picker">
                            <div className="location-picker-border">
                                <a className="select-label-party"> 
                                <i class="fas fa-map-marker-alt"></i>
                                <i class="fas fa-angle-down angle-icon location-icon"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="bar-heading-left">
                        <UserBar/>
                    </div>
                </div>
            </div>
        )
    }
}   

export default NavBar