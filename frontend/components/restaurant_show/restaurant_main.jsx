import React from 'react';
import MainHeader from './main_header';
import MainBody from './main_body';


class RestaurantMain extends React.Component {
    
    render() {
        return (
            <div className="rest-main">
                <div className="rest-main-header-container">
                    <div className="style"></div>
                    <MainHeader/>
                </div>
                <div className="overview-section">
                    <MainBody {...this.props}/>
                </div>
            </div>
        )
    }
}

export default RestaurantMain;