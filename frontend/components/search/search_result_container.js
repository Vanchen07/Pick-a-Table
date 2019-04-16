import { connect } from 'react-redux';
import SearchResult from './search_result';

const mapStateToProps = (state) => ({
    filters: state.ui.filters
});
    

export default connect(mapStateToProps, null)(SearchResult);