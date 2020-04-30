import { addFilter, removeFilter, clearAllFilters } from '../../actions/filter_actions';
import { connect } from 'react-redux';
import Filters from './filters';

const mapStateToProps = state => {
  return {
    activeFilters: state.ui.filters,
    allPrices: [...new Set(Object.values(state.entities.restaurants).map((res) => (res.price_range)))],  
    allNeighborhoods: [...new Set(Object.values(state.entities.restaurants).map((res) => (res.neighborhood_name)))],
    allCuisines: [...new Set(Object.values(state.entities.restaurants).map((res) => (res.cuisine_type)))],
    allDressCodes: [...new Set(Object.values(state.entities.restaurants).map((res) => (res.dress_code)))],
    allDiningStyles: [...new Set(Object.values(state.entities.restaurants).map((res) => (res.dining_style)))]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFilter: (filter, value) => dispatch(addFilter(filter, value)),
    removeFilter: (filter, value) => dispatch(removeFilter(filter, value)),
    clearAllFilters: () => dispatch(clearAllFilters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);