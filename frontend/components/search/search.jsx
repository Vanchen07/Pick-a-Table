import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import LocationLinkBar from './location_link_bar';
import SearchFieldContainer from '../search_field/search_field_container';
import FiltersContainer from '../filter/filters_container';
import SearchResultContainer from './search_result_container';

class Search extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render () {
        return (
            <div>
                <NavBarContainer/>
                <LocationLinkBar/>
                <div className="search-control">
                    <div className="search-wrapper">
                        <div className="page-header-content">
                            <SearchFieldContainer {...this.props}/>
                        </div>
                    </div>
                </div>
                <div className="results-main-container">
                    <FiltersContainer {...this.props} />
                    <SearchResultContainer {...this.props} />
                </div>
                {/* <ResultsMainContainer {...this.props}/> */}
            </div>
        );
    }
}

export default Search;