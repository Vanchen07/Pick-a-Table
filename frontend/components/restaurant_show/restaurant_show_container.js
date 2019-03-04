import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import {fetchRestaurant} from '../../actions/restaurant_actions'

const mapStateToProps = (state, ownProps) => {
    let restaurantId = state.entities.restaurants.byName[ownProps.match.params.restaurantName]
    return ({
        restaurant: state.entities.restaurants[restaurantId]
    })
}
    

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);