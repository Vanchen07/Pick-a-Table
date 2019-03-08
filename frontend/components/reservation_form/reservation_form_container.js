import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import ReservationForm from './reservation_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { createReservation } from '../../actions/reservation_actions';
import {findRestaurantByName} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    reservations: state.entities.reservations,
    errors: state.errors.errors,
    currentUserId: state.session.currentUserId,
    restaurant: findRestaurantByName(state, ownProps.match.params.restaurantName)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    loginForm: (user) => dispatch(login(user)),
    signupForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openSignupModal: () => dispatch(openModal('signup')),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);