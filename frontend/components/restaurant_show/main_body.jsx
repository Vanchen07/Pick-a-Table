import React from 'react';
import BodyNameHeading from './body_name_heading';
import BodyRestaurantDescription from './body_restaurant_description';
import BodyRestaurantAttributes from './body_restaurant_attributes';
import ReservationFormContainer from '../reservation_form/reservation_form_container';


class MainBody extends React.Component {
    
    render() {
        return (
            <div className="main-body-header-name">
               <BodyNameHeading {...this.props}/>
                <div className="name-heading-lower">
                    {/* <div className="name-heading-lower-item">{this.props.restaurant.price_range}</div> */}
                    <div className="name-heading-lower-item">{this.props.restaurant.cuisine_type}</div>
                </div>
                <div>
                    <div className="top-tags">
                        <span className="top-tags-span">Top Tags:</span>
                        <ul className="top-tags-ul">
                            <li className="top-tags-li">
                                <div className="top-tags-li-item">
                                    <span className="top-tags-li-item-span">Good For A Date</span>
                                </div>
                            </li>
                            <li className="top-tags-li">
                                <div className="top-tags-li-item">
                                    <span className="top-tags-li-item-span">Special Occasion</span>
                                </div>
                            </li>
                            <li className="top-tags-li">
                                <div className="top-tags-li-item">
                                    <span className="top-tags-li-item-span">Authentic</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="reservation-container">
                    <ReservationFormContainer {...this.props}/>
                </div>
               <BodyRestaurantDescription {...this.props}/>
               <BodyRestaurantAttributes {...this.props}/>
            </div>
        )
    }
}

export default MainBody;