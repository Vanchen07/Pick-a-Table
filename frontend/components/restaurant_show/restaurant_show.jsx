import React from 'react';

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
        <div>
            {this.props.restaurant.name}
            <img src={this.props.restaurant.image_url}/>  
        </div>
        );
    }
}

export default RestaurantShow;