import React from 'react';
import MainHeader from './main_header';
import MainBody from './main_body';

class RestaurantMain extends React.Component {
    
    render() {
        return (
            <div>
                <MainHeader/>
                <MainBody {...this.props}/>
            </div>
        )
    }
}

export default RestaurantMain;