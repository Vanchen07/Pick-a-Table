import { addFilter, removeFilter, clearAllFilters } from '../../actions/filter_actions';
import { connect } from 'react-redux';
import SearchField from './search_field';


const mapStateToProps = state => {
  return {
    activeFilters: state.ui.filters,
    allNeighborhoods: [...new Set(Object.values(state.entities.restaurants).map((res)=> (res.neighborhood_name)))],
    allCuisines: [...new Set(Object.values(state.entities.restaurants).map((res)=> (res.cuisine_type)))]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFilter: (filter, value) => dispatch(addFilter(filter, value)),
    removeFilter: (filter, value) => dispatch(removeFilter(filter, value)),
    clearAllFilters: () => dispatch(clearAllFilters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);