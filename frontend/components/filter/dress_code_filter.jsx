import React from 'react';

class DressCodeFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(dress_code) {
        let {activeFilters, addFilter, removeFilter} = this.props;

        return () => {
           
            if (activeFilters.includes(dress_code)) {
                return removeFilter("dress_code", dress_code);
            } else {
                return addFilter("dress_code", dress_code);
            }
        }
    }

    render () {
     
        const dressCodes = this.props.allDressCodes.map(dress_code => {

            return (
                <div className='filter-component'>
                    
                    <input type="checkbox"
                        dress_code={dress_code} 
                        activedining={this.props.activeFilters.includes(dress_code).toString()}
                        onClick={this.handleClick(dress_code)}
                    />
                    <label className='filter-label'>{dress_code}</label>
                </div>
            );
        });

        return (
            <div className='filter-container'>
                <ul>
                    <h2 className='filter-title'>
                    <i class="fas fa-tshirt filter-icon"></i> 
                    <span>Dress Code</span></h2>
                    <li>
                    {dressCodes}
                    </li>
                </ul>
            </div>
        );
    }
}

export default DressCodeFilter;