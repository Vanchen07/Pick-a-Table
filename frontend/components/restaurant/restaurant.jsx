import React from 'react';

class Restaurant extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.id)
    }

    render () {
        return (
        <div>
            {this.props.restaurant.name}
            <img src={this.props.restaurant.image_url}/>  
        </div>
        );
    }
}

export default Restaurant;