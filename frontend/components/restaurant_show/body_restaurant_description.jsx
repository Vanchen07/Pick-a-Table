import React from 'react';

class BodyRestaurantDescription extends React.Component {
    
    render() {
        return (
            <div id="scroll-description" className="body-description">
                {this.props.restaurant.description}
            </div>
        )
    }
}

export default BodyRestaurantDescription;