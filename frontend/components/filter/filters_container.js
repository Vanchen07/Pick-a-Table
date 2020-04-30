import { addFilter, removeFilter, clearAllFilters } from '../../actions/filter_actions';
import { connect } from 'react-redux';
import Filters from './filters';
import { selectFilters } from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
    activeFilters: state.ui.filters,
    allPrices: selectFilters(state, price_range),  
    allNeighborhoods: selectFilters(state, neighborhood_name),
    allCuisines: selectFilters(state, cuisine_type),
    allDressCodes: selectFilters(state, dress_code),
    allDiningStyles: selectFilters(state, dining_style)
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