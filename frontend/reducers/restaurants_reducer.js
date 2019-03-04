import {RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            nextState.byName = {}
            action.restaurants.forEach(restaurant => {
                nextState[restaurant.id] = restaurant
                nextState.byName[restaurant.name] = restaurant.id
            })

            return nextState;
        case RECEIVE_RESTAURANT:
            // const newRestaurant = {[action.restaurant.id]: action.restaurant}
            nextState[action.restaurant.id] = action.restaurant
            return {...state, nextState}
        default:
            return state;
    }
}

export default restaurantsReducer