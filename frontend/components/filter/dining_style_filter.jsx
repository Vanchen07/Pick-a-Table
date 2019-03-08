import React from 'react';

class DiningStyleFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(dining_style) {
        let {activeFilters, addFilter, removeFilter} = this.props;

        return () => {
           
            if (activeFilters.includes(dining_style)) {
                return removeFilter("dining_style", dining_style);
            } else {
                return addFilter("dining_style", dining_style);
            }
        }
    }

    render () {
     
        const diningStyles = this.props.allDiningStyles.map(dining_style => {

            return (
                <div className='filter-component'>
                    
                    <input type="checkbox"
                        dining_style={dining_style} 
                        activedining={this.props.activeFilters.includes(dining_style).toString()}
                        onClick={this.handleClick(dining_style)}
                    />
                    <label className='filter-label'>{dining_style}</label>
                </div>
            );
        });

        return (
            <div className='filter-container'>
                <ul>
                    <h2 className='filter-title'>
                    <i class="fas fa-concierge-bell filter-icon"></i>
                    <span>Dining Style</span></h2>
                    <li>
                    {diningStyles}
                    </li>
                </ul>
            </div>
        );
    }
}

export default DiningStyleFilter;