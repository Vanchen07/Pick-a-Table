import React from 'react';
import UserBar from './user_bar';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(e) {
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

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
                        <div className="logo-padding">
                            <Link to='/' className="secondary">Pick-A-Table</Link>
                        </div>
                     
                        <div className="location-picker-dropdown">
                            <div className="dropdown-location" >
                                <button className="dropbtn-dashboard-location" onClick={this.showMenu}>
                                    <span className="user-bar-name-span-location">
                                        <i class="fas fa-map-marker-alt fa-lg location-color"></i>
                                    </span>
                                    
                                    <i class="fas fa-angle-down fa-lg location-color"></i>

                                </button>

                                {this.state.showMenu ? (
                                    <div className="dropdown-content-location" ref={(element) => {this.dropdownMenu = element;}}>
                                        <a href="#" >Mission</a>
                                        <a href="#" >Civic Center</a>
                                        <a href="#" >Downtown</a>
                                        <a href="#" >Financial District</a>
                                        <Link to="/search">All neighborhoods</Link>
                                    </div>
                                ) : (
                                    null
                                )}
                                
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