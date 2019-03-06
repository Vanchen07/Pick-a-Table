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
                <section className="splash-block">Popular Restaurants in San Francisco
                    <div>
                        <h2></h2>
                    </div>
                </section>
                <section className="splash-block">
                    <div>
                        <h2>Top Cuisines Near You</h2>
                    </div>
                    <div>
                        
                    </div>
                </section>
                <section className="splash-block">Featured Neighborhoods

                </section>
            </div>
        </div>
        );
    }
}

export default Splash;