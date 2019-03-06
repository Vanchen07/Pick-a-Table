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
                <div>
                    <label>{neighborhood}</label>
                    <input type="checkbox"
                        neighborhood={neighborhood} 
                        activedining={this.props.activeFilters.includes(neighborhood).toString()}
                        onClick={this.handleClick(neighborhood)}
                    />
                </div>
            );
        });

        return (
            <div>
                <ul>
                    <h2>Neighborhood</h2>
                    <li>
                    {neighborhoods}
                    </li>
                </ul>
            </div>
        );
    }
}

export default NeighborhoodFilter;