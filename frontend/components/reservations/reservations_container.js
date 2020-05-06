import { connect } from "react-redux";
import Reservation from "./reservations";

const mapStateToProps = (state, ownProps) => {
  return {
    reservations: state.entities.reservations,
    errors: state.errors.errors,
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReservation: (reservation) =>
      dispatch(createReservation(reservation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
