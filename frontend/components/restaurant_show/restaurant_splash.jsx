import React from 'react';

class RestaurantSplash extends React.Component {
    render () {
        return (
            <div className="splash-photo">
                <img src={this.props.restaurant.image_url} alt={this.props.restaurant.name}/>
            </div>
        );
    }
}

export default RestaurantSplash;