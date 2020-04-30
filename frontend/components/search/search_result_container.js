import { connect } from 'react-redux';
import SearchResult from './search_result';
import { clearAllFilters, removeFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
    restaurants: state.entities.restaurants,
    filters: state.ui.filters
});
    

const mapDispatchToProps = dispatch => {
    return {
      clearAllFilters: () => dispatch(clearAllFilters()),
      removeFilter: () => dispatch(removeFilter())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);