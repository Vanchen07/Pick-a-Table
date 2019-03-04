import React from 'react';
import NavBar from './nav_bar';
import Hero from './hero';
import RestaurantContainer from '../restaurants/restaurants_container';

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