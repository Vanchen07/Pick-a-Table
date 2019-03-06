import React from 'react';
import NavBar from './nav_bar';
import Hero from './hero';

class Splash extends React.Component {

    render () {
        return (
        <div>
            <NavBar/>
            <Hero/>
            <div className="splash-main">
                <div className="splash-block">Popular Restaurants in San Francisco
                    
                </div>
                <div className="splash-block">Top Cuisines Near You

                </div>
                <div className="splash-block">Featured Neighborhoods

                </div>
            </div>
        </div>
        );
    }
}

export default Splash;