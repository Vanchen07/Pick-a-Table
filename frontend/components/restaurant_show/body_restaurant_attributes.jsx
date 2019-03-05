import React from 'react';

class BodyRestaurantAttributes extends React.Component {

    render() {
        return(
            <div >
               <div>
                    <div>
                        <div><i class="fas fa-concierge-bell"></i></div>
                        <div>Dining Style</div>
                        <div>{this.props.restaurant.dining_style}</div>
                    </div>
                    <div>
                        <div><i class="fas fa-utensils"></i></div>
                        <div>Cuisine</div>
                        <div>{this.props.restaurant.cuisine_type}</div>
                    </div>
                    <div>
                        <div><i class="far fa-clock"></i></div>
                        <div>Hours of operation</div>
                        <div>{`{this.props.restaurant.opening_hour} - {this.props.restaurant.closing_hour}`}</div>
                    </div>
                    <div>
                        <div><i class="fas fa-phone"></i></div>
                        <div>Phone number</div>
                        <div>{this.props.restaurant.phone_number}</div>
                    </div>
               </div>
                    <div>
                        <div><i class="fas fa-map-marker-alt"></i></div>
                        <div>Address</div>
                        <div>{this.props.restaurant.address}</div>
                    </div>
                    <div>
                        <div><i class="far fa-building"></i></div>
                        <div>Neighborhood</div>
                        <div>{this.props.restaurant.neighborhood_name}</div>
                    </div>
                    <div>
                        <div><i class="fas fa-tshirt"></i></div>
                        <div>Dress code</div>
                        <div>{this.props.restaurant.dress_code}</div>
                    </div>
                    <div>
                        <div><i class="fas fa-external-link-alt"></i></div>
                        <div>Website</div>
                        <div><a href={this.props.restaurant.website}></a></div>
                    </div>
               <div>

               </div>
            </div>
        )
    }
}   

export default BodyRestaurantAttributes;