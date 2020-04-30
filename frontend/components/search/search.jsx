import React from 'react';
import NavBar from '../navbar/nav_bar';
import LocationLinkBar from './location_link_bar';
import SearchFieldContainer from '../search_field/search_field_container';
import ResultsMain from './results_main';

class Search extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render () {
        return (
            <div>
                <NavBar/>
                <LocationLinkBar/>
                <div className="search-control">
                    <div className="search-wrapper">
                        <div className="page-header-content">
                            <SearchFieldContainer {...this.props}/>
                        </div>
                    </div>
                </div>
                <ResultsMain {...this.props}/>
            </div>
        );
    }
}

export default Search;