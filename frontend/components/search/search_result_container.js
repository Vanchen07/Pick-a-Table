import { connect } from 'react-redux';
import SearchResult from './search_result';
import { clearAllFilters, removeFilter } from '../../actions/filter_actions';
import { clearSearchRes } from '../../actions/search_actions';


const mapStateToProps = (state) => ({
    restaurants: state.entities.restaurants,
    filters: state.ui.filters,
    search: state.entities.search
});
    

const mapDispatchToProps = dispatch => {
    return {
      clearAllFilters: () => dispatch(clearAllFilters()),
      removeFilter: () => dispatch(removeFilter()),
      clearSearchRes: () => dispatch(clearSearchRes())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);