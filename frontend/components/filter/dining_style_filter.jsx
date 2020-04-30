import React from 'react';

class DiningStyleFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(dining_style) {
        let {activeFilters, addFilter, removeFilter } = this.props;

        return () => {
           
            if (activeFilters.has(dining_style)) {
                return removeFilter("dining_style", dining_style);
            } else {
                return addFilter("dining_style", dining_style);
            }
        }
    }

    render () {
     
        const diningStyles = this.props.allDiningStyles.map((dining_style, i) => {
            let defaultChecked;

            if (this.props.activeFilters.has(dining_style)) {
                defaultChecked = "checked";
            } else {
                defaultChecked = "";
            }

            return (
                <div className='filter-component' key={i}>
                    <input type="checkbox"
                        dining_style={dining_style} 
                        defaultChecked={defaultChecked}
                        // activedining={this.props.activeFilters.includes(dining_style).toString()}
                        onClick={this.handleClick(dining_style)}
                    />
                    <label className='filter-label'>{dining_style}</label>
                </div>
            );
        });

        return (
            <div className="search_filters">
                <ul className="filters-list">
                    <li className="filter-option-neighborhood">
                        <span className="price-band-filter">
                            <span className="price-icon"><i className="fas fa-concierge-bell"></i></span>
                            <span className="price-text">Dining Style</span>
                        </span>
                        <div className="price-band-menu">
                            {diningStyles}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DiningStyleFilter;