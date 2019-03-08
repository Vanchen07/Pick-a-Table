import * as ReservationAPIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS,
    reservations 
});

export const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});

export const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
})

export const fetchReservations = () => dispatch => (
    ReservationAPIUtil.fetchReservations().then(reservations => dispatch(receiveReservations(reservations)))
);

export const fetchReservation = (id) => dispatch => (
    ReservationAPIUtil.fetchReservation(id).then(reservation => dispatch(receiveReservation(reservation)))
)

export const createReservation = (reservationParams) => dispatch => (
    ReservationAPIUtil.createReservation(reservationParams).then(reservation => dispatch(receiveReservation(reservation)))
)

export const updateReservation = reservation => dispatch => (
    ReservationAPIUtil.updateReservation(reservation).then(reservation => dispatch(receiveReservation(reservation)))
)

export const deleteReservation = reservationId => dispatch => (
    ReservationAPIUtil.deleteReservation(reservationId).then(reservation => dispatch(removeReservation(reservationId)))
)