import { connect } from "react-redux";
import Reservation from "./reservations";
import { fetchReservations } from "../../actions/reservation_actions";

const mapStateToProps = (state) => {
  return {
    reservations: Object.values(state.entities.reservations),
    errors: state.errors.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
    // debugger
  return {
    fetchReservations: () => dispatch(fetchReservations())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
