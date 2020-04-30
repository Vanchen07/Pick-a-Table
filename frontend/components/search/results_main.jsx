import React from 'react';
import SearchResult from './search_result';
import FiltersContainer from '../filter/filters_container';

class ResultsMain extends React.Component {
    render () {
        return (
            <div className="results-main-container">
                <FiltersContainer {...this.props}/>
                <SearchResult {...this.props}/>
            </div>
        );
    }
}

export default ResultsMain;

