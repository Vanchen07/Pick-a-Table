import React from 'react';

class BodyRestaurantDescription extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.restaurant.description}
            </div>
        )
    }
}

export default BodyRestaurantDescription;