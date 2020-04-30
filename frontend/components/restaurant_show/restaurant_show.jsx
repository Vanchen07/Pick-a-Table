import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import LocationLinkBar from '../search/location_link_bar';
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
                <NavBarContainer/>
                </div>
                <div>
                <LocationLinkBar />
                </div>
                <div className="restaurant-show-container">
                    <div className="rest-show-hero">
                        {/* <img src={`window.imagesURL.${this.props.restaurant.name}`} alt={this.props.restaurant.name} className="splash-photo"/> */}
                        <img className="splash-photo" src="https://resizer.otstatic.com/v2/photos/wide-huge/24090351.jpg" alt=""/>
                        {/* <RestaurantSplash {...this.props}/> */}
                    </div>
                    <div className="rest-show-body">
                        <RestaurantMain {...this.props}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantShow;