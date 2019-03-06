import React from 'react';

class PriceFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(price) {
        let {activeFilters, addFilter, removeFilter} = this.props;

        return () => {
           
            if (activeFilters.includes(price)) {
                return removeFilter("price", price);
            } else {
                return addFilter("price", price);
            }
        }
    }

    render () {
     
        const prices = this.props.allPrices.map(price => {

            return (
                <div>
                    <label>{price}</label>
                    <input type="checkbox"
                        price={price} 
                        activedining={this.props.activeFilters.includes(price).toString()}
                        onClick={this.handleClick(price)}
                    />
                </div>
            );
        });

        return (
            <div>
                <ul>
                    <h2>Price</h2>
                    <li>
                    {prices}
                    </li>
                </ul>
            </div>
        );
    }
}

export default PriceFilter;