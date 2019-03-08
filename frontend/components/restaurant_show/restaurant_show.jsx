import React from 'react';
import NavBar from '../splash/nav_bar';
import LocationLinkBar from '../restaurant_show/location_link_bar';
import RestaurantSplash from '../restaurant_show/restaurant_splash';
import RestaurantMain from '../restaurant_show/restaurant_main';

class RestaurantShow extends React.Component {
    componentDidMount() {
    
        this.props.fetchRestaurant(this.props.match.params.restaurantName)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.restaurantName !== this.props.match.params.restaurantName) {
            this.props.fetchRestaurant(this.props.match.params.restaurantName)
        }
    }

    render () {
        if (!this.props.restaurant) return null

        return (
        <div >
            <div>
            <NavBar/>
            </div>
            <div>
            <LocationLinkBar />
            </div>
            <div className="restaurant-show-container">
                <div>
                    <RestaurantSplash {...this.props}/>
                </div>
                <div>
                    <RestaurantMain {...this.props}/>
                </div>
            </div>
        </div>
        );
    }
}

export default RestaurantShow;