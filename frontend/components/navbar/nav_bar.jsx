import React from 'react';
import UserBar from './user_bar';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleNeighborhood = this.handleNeighborhood.bind(this);
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

    handleNeighborhood(e, neighborhood) {
        e.preventDefault();
        let searchRes = Object.values(this.props.restaurants).filter((restaurant) => {
            return restaurant.neighborhood_name === neighborhood;
        })
        this.props.receiveSearch(searchRes).then(this.props.history.push('/search'));
    }

    render() {  
        return(
            <div className='nav-bar'>
                <div className='top-bar'>
                </div>
                <div className='bar-heading'>
                    <div className="bar-heading-left">
                        <div>
                            <Link to='/' className="cheers-logo icon"><i className="fas fa-cookie fa-2x"></i></Link>
                        </div>
                        <div className="logo-padding">
                            <Link to='/' className="secondary">Pick-A-Table</Link>
                        </div>
                     
                        <div className="location-picker-dropdown">
                            <div className="dropdown-location" >
                                <button className="dropbtn-dashboard-location" onClick={this.showMenu}>
                                    <span className="user-bar-name-span-location">
                                        <i className="fas fa-map-marker-alt fa-lg location-color"></i>
                                    </span>
                                    
                                    <i className="fas fa-angle-down fa-lg location-color"></i>

                                </button>

                                {this.state.showMenu ? (
                                    <div className="dropdown-content-location" ref={(element) => {this.dropdownMenu = element;}}>
                                        <a href="#" onClick={(e) => this.handleNeighborhood(e, 'Mission')}>Mission</a>
                                        <a href="#" onClick={(e) => this.handleNeighborhood(e, 'Civic Center')}>Civic Center</a>
                                        <a href="#" onClick={(e) => this.handleNeighborhood(e, 'Downtown')}>Downtown</a>
                                        <a href="#" onClick={(e) => this.handleNeighborhood(e, 'Financial District')}>Financial District</a>
                                        <Link to="/Search" onClick={this.handleNeighborhood}>All neighborhoods</Link>
                                    </div>
                                ) : (
                                    // null
                                    <div className="dropdown-content-location" ref={(element) => { this.dropdownMenu = element; }}>
                                    </div>
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