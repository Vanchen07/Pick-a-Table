import { addFilter, removeFilter, clearAllFilters } from '../../actions/filter_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchField from './search_field';


const mapStateToProps = state => {
  return {
    activeFilters: state.ui.filters,
    // allNeighborhoods: [...new Set(Object.values(state.entities.restaurants).map((res)=> (res.neighborhood_name)))],
    allNeighborhoods: [
      "Mission", 
      "Civic Center", 
      "Financial District", 
      "SOMA", 
      "Bernal Heights", 
      "Castro", 
      "Chinatown", 
      "Fisherman's Wharf", 
      "Glen Park",
      "Hayes Valley",
      "Japantown",
      "Marina",
      "Nob Hill",
      "North Beach",
      "Pacific Heights",
      "Dogpatch",
      "Richmond",
      "Russian Hill",
      "Sunset",
      "Downtown",
      "Western Addition" 
    ]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFilter: (filter, value) => dispatch(addFilter(filter, value)),
    removeFilter: (filter, value) => dispatch(removeFilter(filter, value)),
    clearAllFilters: () => dispatch(clearAllFilters())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchField));