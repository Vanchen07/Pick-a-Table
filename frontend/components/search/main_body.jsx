import React from 'react';
import SearchResultContainer from './search_result_container';

class MainBody extends React.Component {
    
    render () { 
        return (
            <div className="search-results-container">
                <SearchResultContainer {...this.props}/>
            </div>
        );
    }
}

export default MainBody;

