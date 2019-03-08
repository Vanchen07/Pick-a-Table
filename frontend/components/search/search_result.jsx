import React from 'react';
import FilteredResult from './filtered_result';
import EmptySearchResult from './empty_search_result';

class SearchResult extends React.Component {


    passespriceFilter(restaurant) {
        if (this.props.filters.price.length > 0) {
            return this.props.filters.price.includes(restaurant.price_range)
        } else {
            return true 
        }
    }
   
    passesNeighborhoodFilter(restaurant) {
        if(this.props.filters.neighborhood.length > 0) {
            return this.props.filters.neighborhood.includes(restaurant.neighborhood_name)
        } else {
            return true
        }
    }

    passesCuisineFilter(restaurant) {
        if(this.props.filters.cuisine.length > 0) {
            return this.props.filters.cuisine.includes(restaurant.cuisine_type)
        } else {
            return true
        }
    }

    passesDressCodeFilter(restaurant) {
        if (this.props.filters.dress_code.length > 0) {
            return this.props.filters.dress_code.includes(restaurant.dress_code)
        } else {
            return true
        }
    }

    passesDiningStyleFilter(restaurant) {
        if(this.props.filters.dining_style.length > 0) {
            return this.props.filters.dining_style.includes(restaurant.dining_style)
        } else {
            return true
        }
    }

    render () {
        
        let filteredSearchResults = Object.values(this.props.restaurants).filter((restaurant) => {
            return this.passesNeighborhoodFilter(restaurant) 
            && this.passesCuisineFilter(restaurant)
            && this.passesDiningStyleFilter(restaurant)
            && this.passesDressCodeFilter(restaurant)
            && this.passespriceFilter(restaurant)
        })

        // let total = filteredSearchResults.length
        let filtered = filteredSearchResults.map((result, idx) => {
            return (
                <FilteredResult key={idx} result={result}/>
            )
        })


        return (    
            <div className='filters-inner-container search-results-inner-container'>
                {/* <div>Showing {total} Restaurants</div> */}
                    {filtered.length > 0 ? filtered : EmptySearchResult}
            </div>
        );
    }
}

export default SearchResult;