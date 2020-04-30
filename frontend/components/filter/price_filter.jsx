import React from 'react';

class PriceFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(price) {
        let {activeFilters, addFilter, removeFilter } = this.props;

        return () => {
           
            if (activeFilters.has(price)) {
                return removeFilter("price", price);
            } else {
                return addFilter("price", price);
            }
        }
    }

    render () {
        const prices = this.props.allPrices.map((price, i) => {
            let defaultChecked;

            if (this.props.activeFilters.has(price)) {
                defaultChecked = "checked";
            } else {
                defaultChecked = "";
            }

            return (
                <div className='filter-component' key={i}>
                    <input type="checkbox"
                        price={price} 
                        defaultChecked={defaultChecked}
                        // activedining={this.props.activeFilters.includes(price).toString()}
                        onClick={this.handleClick(price)}
                    />
                    <label className='filter-label'>{price}</label>
                </div>
            );
        });

        return (
            <div className="search_filters">
                <ul className="filters-list">
                    <li className="filter-option-prices">
                        <span className="price-band-filter">
                            <span className="price-icon"><i className="fas fa-dollar-sign"></i></span>
                            <span className="price-text">Price</span>
                        </span>
                        <div className="price-band-menu">
                            {prices}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PriceFilter;