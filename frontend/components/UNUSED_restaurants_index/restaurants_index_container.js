import { connect } from 'react-redux';
import RestaurantsIndex from './restaurants_index';
import {fetchRestaurants} from '../../actions/restaurant_actions'

const mapStateToProps = (state) => ({
    restaurants: state.entities.restaurants
})
    

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);