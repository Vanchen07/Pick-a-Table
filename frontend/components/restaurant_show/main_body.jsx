import React from 'react';
import BodyNameHeading from './body_name_heading';
import BodyRestaurantDescription from './body_restaurant_description';
import BodyRestaurantAttributes from './body_restaurant_attributes';

class MainBody extends React.Component {
    
    render() {
        return (
            <div className="main-body">
               <BodyNameHeading {...this.props}/>
               <BodyRestaurantDescription {...this.props}/>
               <BodyRestaurantAttributes {...this.props}/>
            </div>
        )
    }
}

export default MainBody;