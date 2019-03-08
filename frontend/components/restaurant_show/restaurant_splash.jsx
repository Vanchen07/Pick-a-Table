import React from 'react';

class RestaurantSplash extends React.Component {
    render () {
        return (
            <div >
                <img src={`window.imagesURL.${this.props.restaurant.name}`} alt={this.props.restaurant.name} className="splash-photo"/>
            </div>
        );
    }
}

export default RestaurantSplash;