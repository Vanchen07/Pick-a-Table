import { connect } from 'react-redux';
import Restaurants from './restaurants';
import {fetchRestaurants} from '../../actions/restaurant_actions'

const mapStateToProps = (state) => ({
    restaurants: state.entities.restaurants
})
    

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})


export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);