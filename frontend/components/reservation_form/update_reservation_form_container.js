import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import UpdateReservationForm from './update_reservation_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { updateReservation, fetchReservation } from '../../actions/reservation_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        reservation: Object.values(state.entities.reservations),
        errors: state.errors.errors,
        currentUserId: state.session.currentUserId,
        restaurant: Object.values(state.entities.restaurants)[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateReservation: (reservation) => dispatch(updateReservation(reservation)),
        loginForm: (user) => dispatch(login(user)),
        signupForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        openSignupModal: () => dispatch(openModal('signup')),
        clearErrors: () => dispatch(clearErrors()),
        fetchReservation: (id) => dispatch(fetchReservation(id)),
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateReservationForm);