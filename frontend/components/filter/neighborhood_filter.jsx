import React from 'react';

class NeighborhoodFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(neighborhood) {
        let {activeFilters, addFilter, removeFilter} = this.props;

        return () => {
           
            if (activeFilters.includes(neighborhood)) {
                return removeFilter("neighborhood", neighborhood);
            } else {
                return addFilter("neighborhood", neighborhood);
            }
        }
    }

    render () {
     
        const neighborhoods = this.props.allNeighborhoods.map((neighborhood, i) => {

            return (
                <div className='filter-component' key={i}>
                    <input type="checkbox"
                        neighborhood={neighborhood} 
                        // activedining={this.props.activeFilters.includes(neighborhood).toString()}
                        onClick={this.handleClick(neighborhood)}
                    />
                    <label className='filter-label'>{neighborhood}</label>
                </div>
            );
        });

        return (
            <div className="search_filters">
                <ul className="filters-list">
                    <li className="filter-option-neighborhood">
                        <span className="price-band-filter">
                            <span className="price-icon"><i className="far fa-building"></i></span>
                            <span className="price-text">Neighborhood</span>
                        </span>
                        <div className="price-band-menu">
                            {neighborhoods}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NeighborhoodFilter;