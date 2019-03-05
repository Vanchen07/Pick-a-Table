import React from 'react';

class BodyNameHeading extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.restaurant.name}</h1>
                </div>
                <div>
                    {/* <div>{this.props.restaurant.rating}</div> */}
                    {/* <div>{this.props.restaurant.reviews.count}</div> */}
                    <div>{this.props.restaurant.price_range}</div>
                    <div>{this.props.restaurant.cuisine_type}</div>
                </div>
            </div>
        )
    }
}

export default BodyNameHeading;