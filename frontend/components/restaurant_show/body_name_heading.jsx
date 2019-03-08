import React from 'react';

class BodyNameHeading extends React.Component {
    
    render() {
        return (
            <div>
                <div className="name-heading">
                    <h1>{this.props.restaurant.name}</h1>
                </div>
                <div className="name-heading-lower">
                    {/* <div className="name-heading-lower-item">{this.props.restaurant.price_range}</div> */}
                    <div className="name-heading-lower-item">{this.props.restaurant.cuisine_type}</div>
                </div>
            </div>
        )
    }
}

export default BodyNameHeading;