export const RECEIVE_SEARCH_RES = 'RECEIVE_SEARCH_RES';
export const CLEAR_SEARCH_RES = 'CLEAR_SEARCH_RES';

export const receiveSearchRes = (res) => { //res is an array of searched restaurants
    return {
        type: RECEIVE_SEARCH_RES,
        data: res
    };
};

export const clearSearchRes = () => { 
    return {
        type: CLEAR_SEARCH_RES,
    };
};