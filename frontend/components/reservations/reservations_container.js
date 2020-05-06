import { connect } from "react-redux";
import Reservation from "./reservations";
import { fetchReservations } from "../../actions/reservation_actions";

const mapStateToProps = (state) => {
  return {
    reservations: state.entities.reservations,
    errors: state.errors.errors,
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReservations: () => dispatch(fetchReservations())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
