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
                <div>
                    <label>{cuisine}</label>
                    <input type="checkbox"
                        cuisine={cuisine} 
                        activedining={this.props.activeFilters.includes(cuisine).toString()}
                        onClick={this.handleClick(cuisine)}
                    />
                </div>
            );
        });

        return (
            <div>
                <ul>
                    <h2>Cuisine</h2>
                    <li>
                    {cuisines}
                    </li>
                </ul>
            </div>
        );
    }
}

export default CuisineFilter;