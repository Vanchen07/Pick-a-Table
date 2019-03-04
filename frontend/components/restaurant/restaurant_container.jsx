import { connect } from 'react-redux';
import Restaurant from './restaurant';
import {fetchRestaurant} from '../../actions/restaurant_actions'

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantName]
})
    

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);