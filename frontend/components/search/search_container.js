import { connect } from 'react-redux';
import Search from './search';
import {fetchRestaurants} from '../../actions/restaurant_actions'

const mapStateToProps = (state) => ({
    restaurants: state.entities.restaurants,
    filters: state.ui.filters
});
    

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    clearAllFilters: () => dispatch(clearAllFilters())
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);