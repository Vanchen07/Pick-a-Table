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
            
                    <img src={restaurant.image_url}/>  
                </div>
            ))}

        </div>
        );
    }
}

export default Restaurants;