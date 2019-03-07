import React from 'react';
import SearchFieldContainer from './search_field_container';

class SearchBar extends React.Component {
    render () {
        debugger
        return (
            <div>
                <SearchFieldContainer {...this.props}/>
                {/* <OtherField/> */}
            </div>
        );
    }
}

export default SearchBar;


