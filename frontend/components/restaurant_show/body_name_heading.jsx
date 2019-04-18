import React from 'react';

class BodyNameHeading extends React.Component {
    
    render() {
        return (
            <div className="name-heading">
                <h1 className="name-heading-h1">{this.props.restaurant.name}</h1>
            </div>
        )
    }
}

export default BodyNameHeading;