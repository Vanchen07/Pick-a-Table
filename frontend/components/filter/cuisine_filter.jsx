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
     
        const cuisines = this.props.allCuisines.map(cuisine => {

            return (
                <div className='filter-component'>
                    <input type="checkbox"
                        cuisine={cuisine} 
                        activedining={this.props.activeFilters.includes(cuisine).toString()}
                        onClick={this.handleClick(cuisine)}
                    />
                    <label className='filter-label'>{cuisine}</label>
                </div>
            );
        });

        return (
            <div className='filter-container'>
                <ul>
                    <h2 className='filter-title'>
                    <i class="fas fa-utensils filter-icon"></i> 
                    <span>Cuisine</span></h2>
                    <li>
                    {cuisines}
                    </li>
                </ul>
            </div>
        );
    }
}

export default CuisineFilter;