import React from 'react';
import PriceFilter from './price_filter';
import NeighborhoodFilter from './neighborhood_filter';
import CuisineFilter from './cuisine_filter';
import DressCodeFilter from './dress_code_filter';
import DiningStyleFilter from './dining_style_filter';

class Filters extends React.Component {
    render () {
        const { activeFilters } = this.props;
        return (
            <div className="filters-bar">
                <div className="filters-wrapper">
                    <div className="row">
                        <div className="column">
                            <PriceFilter
                                activeFilters={activeFilters.price}
                                allPrices={this.props.allPrices}
                                addFilter={this.props.addFilter}
                                removeFilter={this.props.removeFilter}
                                clearAllFilters={this.props.clearAllFilters}
                            />
                            <NeighborhoodFilter
                                activeFilters={activeFilters.neighborhood}
                                allNeighborhoods={this.props.allNeighborhoods}
                                addFilter={this.props.addFilter}
                                removeFilter={this.props.removeFilter}
                                clearAllFilters={this.props.clearAllFilters}
                            />
                            <CuisineFilter
                                activeFilters={activeFilters.cuisine}
                                allCuisines={this.props.allCuisines}
                                addFilter={this.props.addFilter}
                                removeFilter={this.props.removeFilter}
                                clearAllFilters={this.props.clearAllFilters}
                            />
                            <DressCodeFilter
                                activeFilters={activeFilters.dress_code}
                                allDressCodes={this.props.allDressCodes}
                                addFilter={this.props.addFilter}
                                removeFilter={this.props.removeFilter}
                                clearAllFilters={this.props.clearAllFilters}
                            />
                            <DiningStyleFilter
                                activeFilters={activeFilters.dining_style}
                                allDiningStyles={this.props.allDiningStyles}
                                addFilter={this.props.addFilter}
                                removeFilter={this.props.removeFilter}
                                clearAllFilters={this.props.clearAllFilters}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;