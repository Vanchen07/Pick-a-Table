import React from 'react';

class DressCodeFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(dress_code) {
        let {activeFilters, addFilter, removeFilter } = this.props;

        return () => {
           
            if (activeFilters.has(dress_code)) {
                return removeFilter("dress_code", dress_code);
            } else {
                return addFilter("dress_code", dress_code);
            }
        }
    }

    render () {
     
        const dressCodes = this.props.allDressCodes.map((dress_code, i) => {
            let checked;

            if (this.props.activeFilters.has(dress_code)) {
                checked = "checked";
            } else {
                checked = "";
            }

            return (
                <div className='filter-component' key={i}>
                    <input type="checkbox"
                        dress_code={dress_code} 
                        checked={checked}
                        // activedining={this.props.activeFilters.includes(dress_code).toString()}
                        onClick={this.handleClick(dress_code)}
                    />
                    <label className='filter-label'>{dress_code}</label>
                </div>
            );
        });

        return (
            <div className="search_filters">
                <ul className="filters-list">
                    <li className="filter-option-neighborhood">
                        <span className="price-band-filter">
                            <span className="price-icon"><i className="fas fa-tshirt"></i></span>
                            <span className="price-text">Dress Code</span>
                        </span>
                        <div className="price-band-menu">
                            {dressCodes}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DressCodeFilter;