import React from 'react';

class Restaurants extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render () {
        return (
        <div>
            {Object.values(this.props.restaurants).map((restaurant) => (
                <div>
                    {restaurant.name}
                </div>
            ))}
        </div>
        );
    }
}

export default Restaurants;