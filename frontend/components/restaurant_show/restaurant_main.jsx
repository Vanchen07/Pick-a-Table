import React from 'react';
import MainHeader from './main_header';
import MainBody from './main_body';
import ReservationFormContainer from '../reservation_form/reservation_form_container';

class RestaurantMain extends React.Component {
    
    render() {
        return (
            <div className="main">
                <div>
                <MainHeader/>
                </div>
                <div >
                <MainBody {...this.props}/>
                </div>
                <div>
                <ReservationFormContainer {...this.props}/>
                </div>
            </div>
        )
    }
}

export default RestaurantMain;