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
        <div className="restaurant-show-container">
            <NavBar/>
            <LocationLinkBar />
            <RestaurantSplash {...this.props}/>
            <RestaurantMain {...this.props}/>
        </div>
        );
    }
}

export default RestaurantShow;