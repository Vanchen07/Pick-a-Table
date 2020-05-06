import {RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION} from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch(action.type) {
        case RECEIVE_RESERVATIONS:
            // debugger
            action.reservations.forEach(reservation => {
                nextState[reservation.id] = reservation
            })
            return nextState;
        case RECEIVE_RESERVATION:
            nextState[action.reservation.id] = action.reservation
            return Object.assign({}, state, nextState);
        case REMOVE_RESERVATION:
            delete nextState[action.reservationId]
            return nextState;
        default:
            return state;
    }
}

export default reservationsReducer;