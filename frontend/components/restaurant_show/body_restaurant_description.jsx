import React from 'react';

class BodyRestaurantDescription extends React.Component {
    
    render() {
        return (
            <div className="body-description">
                {this.props.restaurant.description}
            </div>
        )
    }
}

export default BodyRestaurantDescription;