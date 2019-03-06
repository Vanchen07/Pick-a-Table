import React from 'react';
import SearchBar from './search_bar';

class SearchSplash extends React.Component {
    render () {
        return (
            <div>
                <SearchBar {...this.props}/>
            </div>
        );
    }
}

export default SearchSplash;


// ADD IMAGE SOURCE!!!!