import React from 'react';

class BodyRestaurantAttributes extends React.Component {

    render() {
        return(
            <div className="restaurant-attributes">
               <div className="restaurant-attributes-side">
                    <div>
                        <div className="restaurant-attributes-items">
                            <div><i class="fas fa-concierge-bell"></i></div>
                            <div className="restaurant-attributes-items-pad">Dining Style</div>
                        </div>
                        <div className="restaurant-attributes-items-pad2">{this.props.restaurant.dining_style}</div>
                    </div>
                    <div>
                        <div className="restaurant-attributes-items">
                            <i class="fas fa-utensils"></i>
                            <div className="restaurant-attributes-items-pad">Cuisine</div>
                        </div>
                        <div className="restaurant-attributes-items-pad2">{this.props.restaurant.cuisine_type}</div>
                    </div>
                    <div>
                        <div className="restaurant-attributes-items">
                            <i class="far fa-clock"></i>
                            <div className="restaurant-attributes-items-pad">Hours of operation</div>
                        </div>
                        <div className="restaurant-attributes-items-pad2">{`${this.props.restaurant.formatted_opening_hour} - ${this.props.restaurant.formatted_closing_hour}`}</div>
                    </div>
                    <div>
                        <div className="restaurant-attributes-items">
                            <i class="fas fa-phone"></i>
                            <div className="restaurant-attributes-items-pad">Phone number</div>
                        </div>
                        <div className="restaurant-attributes-items-pad2">{this.props.restaurant.phone_number}</div>
                    </div>
               </div>
               <div className="restaurant-attributes-side">
                    <div>
                        <div className="restaurant-attributes-items">
                            <i class="fas fa-map-marker-alt"></i>
                            <div className="restaurant-attributes-items-pad">Address</div>
                        </div>
                        <div className="restaurant-attributes-items-pad2">{this.props.restaurant.address}</div>
                    </div>
                    <div>
                        <div className="restaurant-attributes-items">
                            <i class="far fa-building"></i>
                            <div className="restaurant-attributes-items-pad">Neighborhood</div>
                        </div>
                        <div className="restaurant-attributes-items-pad2">{this.props.restaurant.neighborhood_name}</div>
                    </div>
                    <div>
                        <div className="restaurant-attributes-items">
                            <i class="fas fa-tshirt"></i>
                            <div className="restaurant-attributes-items-pad">Dress code</div>
                        </div>
                        <div className="restaurant-attributes-items-pad2">{this.props.restaurant.dress_code}</div>
                    </div>
                    <div>
                        <div className="restaurant-attributes-items">
                            <i class="fas fa-external-link-alt"></i>
                            <div className="restaurant-attributes-items-pad">Website</div>
                        </div>
                        <div className="restaurant-attributes-items-pad2"><a href={this.props.restaurant.website}></a></div>
                    </div>
                </div>
            </div>
        )
    }
}   

export default BodyRestaurantAttributes;