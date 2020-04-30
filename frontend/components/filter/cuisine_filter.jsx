import React from 'react';

class CuisineFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(cuisine) {
        let {activeFilters, addFilter, removeFilter} = this.props;

        return () => {
           
            if (activeFilters.includes(cuisine)) {
                return removeFilter("cuisine", cuisine);
            } else {
                return addFilter("cuisine", cuisine);
            }
        }
    }

    render () {
     
        const cuisines = this.props.allCuisines.map((cuisine, i) => {

            return (
                <div className='filter-component' key={i}>
                    <input type="checkbox"
                        cuisine={cuisine} 
                        // activedining={this.props.activeFilters.includes(cuisine).toString()}
                        onClick={this.handleClick(cuisine)}
                    />
                    <label className='filter-label'>{cuisine}</label>
                </div>
            );
        });

        return (
            <div className="search_filters">
                <ul className="filters-list">
                    <li className="filter-option-neighborhood">
                        <span className="price-band-filter">
                            <span className="price-icon"><i className="fas fa-utensils"></i></span>
                            <span className="price-text">Cuisine</span>
                        </span>
                        <div className="price-band-menu">
                            {cuisines}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CuisineFilter;