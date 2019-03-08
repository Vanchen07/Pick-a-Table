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
     
        const neighborhoods = this.props.allNeighborhoods.map(neighborhood => {

            return (
                <div className='filter-component'>
                    
                    <input type="checkbox"
                        neighborhood={neighborhood} 
                        activedining={this.props.activeFilters.includes(neighborhood).toString()}
                        onClick={this.handleClick(neighborhood)}
                    />
                    <label className='filter-label'>{neighborhood}</label>
                </div>
            );
        });

        return (
            <div className="filter-container">
                <ul>
                    <h2 className='filter-title'>
                        <i class="far fa-map filter-icon"></i>
                        <span>Neighborhood</span>
                    </h2>
                    <li>
                    {neighborhoods}
                    </li>
                </ul>
            </div>
        );
    }
}

export default NeighborhoodFilter;