import React from 'react';
import FiltersContainer from '../../filter/filters_container';

class MainSideBar extends React.Component {
    render () {
        return (
            <div className="filters-container">
                <FiltersContainer {...this.props}/>
            </div>
        );
    }
}

export default MainSideBar;

