import { RECEIVE_SEARCH_RES, CLEAR_SEARCH_RES } from '../actions/search_actions';

const searchReducer = (state = [], action) => {

    switch (action.type) {
        case RECEIVE_SEARCH_RES:
            return action.data;
        case CLEAR_SEARCH_RES:
            return [];
        default:
            return state;
    }
};

export default searchReducer;