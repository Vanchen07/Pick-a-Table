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
            <div className="rest-row">
                <div className="rest-row-img">
                    <img src="https://images.otstatic.com/prod/25943158/1/medium.jpg" alt=""/>
                </div>
                <div className="rest-row-info">
                        <Link className="rest-name" to={`/${result.name}`}>{result.name}</Link>
                        <BodyRestaurantDescription restaurant={result}/>
                        <BodyRestaurantAttributes restaurant={result}/>
                </div>
            </div>
       
        )
    }
}

export default FilteredResult;