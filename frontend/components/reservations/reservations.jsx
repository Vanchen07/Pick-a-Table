import React from "react";
import Navbar from "../navbar/nav_bar";
import ReservationsIndex from './reservations_index';
import Sidebar from './sidebar';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReservations();
  }

  render() {
    // console.log(this.props);

    if (!this.props.reservations) return null;

    return (
      <div>
        <Navbar />
        <div className="res-container-wrapper">
          <div className="res-container">
            <Sidebar />
            <ReservationsIndex
              reservations={this.props.reservations}
              errors={this.props.errors}
              fetchReservations={this.props.fetchReservations}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
