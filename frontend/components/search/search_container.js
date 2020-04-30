import { connect } from 'react-redux';
import Search from './search';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
    restaurants: state.entities.restaurants,
    search: state.entities.search
});
    

const mapDispatchToProps = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);