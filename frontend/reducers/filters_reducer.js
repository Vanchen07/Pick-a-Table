import {ADD_FILTER, REMOVE_FILTER, CLEAR_ALL_FILTERS} from '../actions/filter_actions';

const initialState = {
    price: [],
    neighborhood: [],
    cuisine: [],
    dress_code: [],
    dining_style: []
};
const filtersReducer = function(state = initialState, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case ADD_FILTER:
        newState[action.data.filterName].push(action.data.filterValue)
        return newState;
      case REMOVE_FILTER:
        newState[action.data.filterName].splice(newState[action.data.filterName].indexOf(newState[action.data.filterValue]),1);
        return newState;
      case CLEAR_ALL_FILTERS:
        return initialState;
      default:
        return state;
    }
  }

export default filtersReducer;