import React from 'react';
import NavBar from './nav_bar';
import Hero from './hero';

class Splash extends React.Component {
    render () {
        return (
        <div>
        <NavBar/>
        <Hero/>
        </div>
        );
    }
}

export default Splash;