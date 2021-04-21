import { connect } from "react-redux";
import Reservation from "./reservations";
import { fetchReservations, deleteReservation } from "../../actions/reservation_actions";

const mapStateToProps = (state) => {
  return {
    reservations: Object.values(state.entities.reservations),
    errors: state.errors.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
    deleteReservation: (id) => dispatch(deleteReservation(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
