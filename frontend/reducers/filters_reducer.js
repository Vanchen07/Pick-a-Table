import {ADD_FILTER, REMOVE_FILTER, CLEAR_ALL_FILTERS} from '../actions/filter_actions';

//use set instead of an array to collect the filters
const initialState = {
  price: new Set(),
  neighborhood: new Set(),
  cuisine: new Set(),
  dress_code: new Set(),
  dining_style: new Set(),
  time: new Set()
};

const filtersReducer = function(state = initialState, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case ADD_FILTER:
        newState[action.data.filterName].add(action.data.filterValue);
        return newState;
      case REMOVE_FILTER:
        let val = action.data.filterValue;
        newState[action.data.filterName].delete(val);
        return newState;
      case CLEAR_ALL_FILTERS:
        let clearState = {
          price: new Set(),
          neighborhood: new Set(),
          cuisine: new Set(),
          dress_code: new Set(),
          dining_style: new Set(),
          time: new Set()
        };
        return clearState;
      default:
        return state;
    }
};

export default filtersReducer;