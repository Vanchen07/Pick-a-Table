import { connect } from 'react-redux';
import { clearAllFilters, removeFilter, addFilter } from '../../actions/filter_actions';
import NavBar from './nav_bar';
import { receiveSearchRes } from '../../actions/search_actions';


const mapStateToProps = (state) => ({
    restaurants: state.entities.restaurants,
    filters: state.ui.filters,
    searchRes: state.entities.search
});


const mapDispatchToProps = dispatch => {
    return {
        clearAllFilters: () => dispatch(clearAllFilters()),
        removeFilter: () => dispatch(removeFilter()),
        addFilter: (filter, filterValue) => dispatch(addFilter(filter, filterValue)),
        receiveSearch: (res) => dispatch(receiveSearchRes(res))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);