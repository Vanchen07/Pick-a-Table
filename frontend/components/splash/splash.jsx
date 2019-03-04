import React from 'react';
import NavBar from './nav_bar';
import Hero from './hero';
import RestaurantsContainer from '../restaurants/restaurants_container';
import RestaurantContainer from '../restaurant/restaurant_container';

class Splash extends React.Component {
    render () {
        return (
        <div>
        <NavBar/>
        <Hero/>
        <RestaurantContainer/>
        </div>
        );
    }
}

export default Splash;