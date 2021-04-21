import React from "react";
import NavbarContainer from "../navbar/nav_bar_container";
import ReservationsIndex from './reservations_index';
import Sidebar from './sidebar';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReservations();
  }

  currentSort() {
    let res = this.props.reservations.filter(ele => {
      return Date.parse(ele.date) > Date.now();
    })

    return res.sort((a, b) => {
      return a.date.localeCompare(b.date);
    })
  }

  historySort() {
    let res = this.props.reservations.filter(ele => {
      return Date.parse(ele.date) < Date.now();
    })

    return res.sort((a, b) => {
      return a.date.localeCompare(b.date);
    })
  }

  render() {
    if (!this.props.reservations) return null;

    let res;
    let route;
    if (this.props.match.path === '/reservations') {
      res = this.currentSort();
      route = "Reservations";
    } else {
      res = this.historySort();
      route = "History";
    }

    return (
      <div>
        <NavbarContainer />
        <div className="profile-container-wrapper">
          {/* <div className="res-container"> */}
            <Sidebar />
            <ReservationsIndex
              route={route}
              reservations={res}
              errors={this.props.errors}
              fetchReservations={this.props.fetchReservations}
              deleteReservation={this.props.deleteReservation}
            />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Reservation;
