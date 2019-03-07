import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';
import { addFilter, removeFilter, clearAllFilters } from '../../actions/filter_actions';
import {fetchRestaurants} from '../../actions/restaurant_actions';


const mapStateToProps = ({ session, entities: { users, restaurants }, ui: { filters } }) => {
  return {
    currentUser: users[session.currentUserId],
    restaurants,
    activeFilters: filters,
    allNeighborhoods: [...new Set(Object.values(restaurants).map((res)=> (res.neighborhood_name)))],
    allCuisines: [...new Set(Object.values(restaurants).map((res)=> (res.cuisine_type)))]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  addFilter: (filter, value) => dispatch(addFilter(filter, value)),
  removeFilter: (filter, value) => dispatch(removeFilter(filter, value)),
  clearAllFilters: () => dispatch(clearAllFilters()),
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);