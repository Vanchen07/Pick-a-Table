import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearAllFilters, removeFilter, addFilter } from '../../actions/filter_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => ({
    restaurants: state.entities.restaurants,
    filters: state.ui.filters
});


const mapDispatchToProps = dispatch => {
    return {
        clearAllFilters: () => dispatch(clearAllFilters()),
        removeFilter: () => dispatch(removeFilter()),
        addFilter: (filter, filterValue) => dispatch(addFilter(filter, filterValue))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));