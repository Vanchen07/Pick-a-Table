export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';

export const addFilter = (filter, value) => {
  return {
    type: ADD_FILTER,
    data: {
        filterName: filter,
        filterValue: value
    }
  };
};

export const removeFilter = (filter, value) => {
  return {
    type: REMOVE_FILTER,
    data: {
        filterName: filter,
        filterValue: value
    }
  };
};

export const clearAllFilters = () => {
    return {
        type: CLEAR_ALL_FILTERS,
    }
}
