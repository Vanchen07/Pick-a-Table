import React from 'react';
import BodyRestaurantDescription from '../restaurant_show/body_restaurant_description'
import BodyRestaurantAttributes from '../restaurant_show/body_restaurant_attributes';
import {Link} from 'react-router-dom';

class FilteredResult extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { result } = this.props;
        return (
            <div className='filtered-result-container'>
                <div className='filtered-result-head'><Link to={`/${result.name}`}>{result.name}</Link></div>
                {/* <BodyRestaurantDescription restaurant={result}/> */}
                <BodyRestaurantAttributes restaurant={result}/>
            </div>
        )
    }
}

export default FilteredResult;