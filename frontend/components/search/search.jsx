import React from 'react';
import NavBar from '../splash/nav_bar';
import LocationLinkBar from '../restaurant_show/location_link_bar';
import SearchSplash from './search_splash';
import ResultsMain from './results_main';

class Search extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render () {
        return (
            <div>
                <NavBar/>
                <LocationLinkBar/>
                <SearchSplash {...this.props}/>
                <ResultsMain {...this.props}/>
            </div>
        );
    }
}

export default Search;