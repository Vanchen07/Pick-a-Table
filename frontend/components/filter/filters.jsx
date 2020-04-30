import React from 'react';
import PriceFilter from './price_filter';
import NeighborhoodFilter from './neighborhood_filter';
import CuisineFilter from './cuisine_filter';
import DressCodeFilter from './dress_code_filter';
import DiningStyleFilter from './dining_style_filter';

class Filters extends React.Component {
    render () {
        const { activeFilters, allPrices, allNeighborhoods, allCuisines, allDressCodes, allDiningStyles, addFilter, removeFilter, clearAllFilters, clearSearchRes } = this.props;
        return (
            <div className="filters-bar">
                <div className="filters-wrapper">
                    <div className="row">
                        <div className="column">
                            <PriceFilter
                                activeFilters={activeFilters.price}
                                allPrices={allPrices}
                                addFilter={addFilter}
                                removeFilter={removeFilter}
                                clearAllFilters={clearAllFilters}
                                clearSearchRes={clearSearchRes}
                            />
                            <NeighborhoodFilter
                                activeFilters={activeFilters.neighborhood}
                                allNeighborhoods={allNeighborhoods}
                                addFilter={addFilter}
                                removeFilter={removeFilter}
                                clearAllFilters={clearAllFilters}
                                clearSearchRes={clearSearchRes}
                            />
                            <CuisineFilter
                                activeFilters={activeFilters.cuisine}
                                allCuisines={allCuisines}
                                addFilter={addFilter}
                                removeFilter={removeFilter}
                                clearAllFilters={clearAllFilters}
                                clearSearchRes={clearSearchRes}
                            />
                            <DressCodeFilter
                                activeFilters={activeFilters.dress_code}
                                allDressCodes={allDressCodes}
                                addFilter={addFilter}
                                removeFilter={removeFilter}
                                clearAllFilters={clearAllFilters}
                                clearSearchRes={clearSearchRes}
                            />
                            <DiningStyleFilter
                                activeFilters={activeFilters.dining_style}
                                allDiningStyles={allDiningStyles}
                                addFilter={addFilter}
                                removeFilter={removeFilter}
                                clearAllFilters={clearAllFilters}
                                clearSearchRes={clearSearchRes}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;