import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';
import {fetchRestaurant} from '../../actions/restaurant_actions';
import {findRestaurantByName} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    return ({
        restaurant: findRestaurantByName(state, ownProps.match.params.restaurantName)
    });
};
    

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);