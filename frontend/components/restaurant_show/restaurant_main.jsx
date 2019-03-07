import React from 'react';
import MainHeader from './main_header';
import MainBody from './main_body';
import ReservationFormContainer from '../reservation_form/reservation_form_container';

class RestaurantMain extends React.Component {
    
    render() {
        return (
            <div>
                <MainHeader/>
                <MainBody {...this.props}/>
                <ReservationFormContainer {...this.props}/>
            </div>
        )
    }
}

export default RestaurantMain;