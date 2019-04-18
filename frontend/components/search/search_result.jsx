import React from 'react';
import FilteredResult from './filtered_result';
import EmptySearchResult from './empty_search_result';

class SearchResult extends React.Component {

    passespriceFilter(restaurant) {
        if (this.props.filters.price.length > 0) {
            return this.props.filters.price.includes(restaurant.price_range);
        } else {
            return true;
        }
    }
   
    passesNeighborhoodFilter(restaurant) {
        if(this.props.filters.neighborhood.length > 0) {
            return this.props.filters.neighborhood.includes(restaurant.neighborhood_name);
        } else {
            return true;
        }
    }

    passesCuisineFilter(restaurant) {
        if(this.props.filters.cuisine.length > 0) {
            return this.props.filters.cuisine.includes(restaurant.cuisine_type);
        } else {
            return true;
        }
    }

    passesDressCodeFilter(restaurant) {
        if (this.props.filters.dress_code.length > 0) {
            return this.props.filters.dress_code.includes(restaurant.dress_code);
        } else {
            return true;
        }
    }

    passesDiningStyleFilter(restaurant) {
        if(this.props.filters.dining_style.length > 0) {
            return this.props.filters.dining_style.includes(restaurant.dining_style);
        } else {
            return true;
        }
    }

    render () {
        
        let filteredSearchResults = Object.values(this.props.restaurants).filter((restaurant) => {
            return this.passesNeighborhoodFilter(restaurant) 
                && this.passesCuisineFilter(restaurant)
                && this.passesDiningStyleFilter(restaurant)
                && this.passesDressCodeFilter(restaurant)
                && this.passespriceFilter(restaurant)
        });

        // let total = filteredSearchResults.length
        let filtered = filteredSearchResults.map((result, idx) => {
            return (
                <FilteredResult key={idx} result={result}/>
            )
        });


        return (    
            <div className='search-result-container'>
                <div className="search-result-wrapper">
                    <div className="search-row">
                        <div className="search-column"></div>
                    </div>
                </div>

                <div className='filtered-result-container'>
                <div>
                    <div className='filtered-result-header'>
                        <div className="filtered-result-header-bar">
                            <h3 className="filtered-result-header-title">106 tables available</h3>
                            <div className="sort-view-filter">
                                <div className="sort-filters">
                                    <div className="sort-dropdown">
                                        <button
                                            onClick={this.props.clearAllFilters.bind(this)} 
                                            value="">
                                            <span>Clear All Filters</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-section-header">
                            <div className="content-section-bar"></div>
                        </div>
                        <div className="content-section">  
                            <div className="content-section-list">
                                {filtered.length > 0 ? filtered : EmptySearchResult}
                            </div>
                        </div>
                    </div>
                    {/* <Link to={`/${result.name}`}>{result.name}</Link> */}
                </div>
            </div>
            </div>
        );
    }
}

export default SearchResult;