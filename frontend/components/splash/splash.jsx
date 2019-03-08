import React from 'react';
import NavBar from './nav_bar';
import Hero from './hero';

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render () {
        return (
        <div>
            <NavBar/>
            <Hero {...this.props}/>
            <div className="splash-main">
                <section className="splash-block1">
                    <div>
                        <div className="splash-block-header">
                            <h2>Popular Restaurants in San Francisco</h2>
                        </div>
                        <div className="splash-block-body">
                            <div className="splash-block-body-item">
                                <div>
                                    <img src={window.imagesURL.picture1}/>
                                </div>
                                <div className="splash-block-body-item-content">

                                </div>
                            </div>
                            <div className="splash-block-body-item">
                                <div>
                                    <img src="/assets/images/restaurant1"/>
                                </div>
                                <div className="splash-block-body-item-content">

                                </div>
                            </div>
                            <div className="splash-block-body-item">
                                <div>
                                    <img src="/assets/images/restaurant1"/>
                                </div>
                                <div className="splash-block-body-item-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="splash-block2">
                    <div className="splash-block-header">
                        <h2>Top Cuisines Near You</h2>
                    </div>
                    <div className="splash-block-body">
                        <div className="splash-block-body-item2">
                            <img src="/assets/images/restaurant1"/>
                        </div>
                        <div className="splash-block-body-item2">
                            <img src="/assets/images/restaurant1"/>
                        </div>
                        <div className="splash-block-body-item2">
                            <img src="/assets/images/restaurant1"/>
                        </div>
                        <div className="splash-block-body-item2">
                            <img src="/assets/images/restaurant1"/>
                        </div>
                    </div>
                </section>
                <section className="splash-block3">
                    <div className="splash-block-header">
                        <h2>Featured Neighborhoods</h2>
                    </div>
                    <div className="splash-block-body3">
                        <div className="splash-block-body-item3">
                            <div className="splash-block-body-item-content3">
                                <img src="/assets/images/restaurant1.jpg"/>
                            </div>
                            <div className="splash-block-body-item-content3">
                                <img src="/assets/images/restaurant1"/>
                            </div>
                            <div className="splash-block-body-item-content3">
                                <img src="/assets/images/restaurant1"/>
                            </div>
                        </div>
                        <div className="splash-block-body-item3">
                            <div className="splash-block-body-item-content3">
                                <img src="/assets/images/restaurant1"/>
                            </div>
                            <div className="splash-block-body-item-content3">
                                <img src="/assets/images/restaurant1"/>
                            </div>
                            <div className="splash-block-body-item-content3">
                                <img src="/assets/images/restaurant1"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        );
    }
}

export default Splash;