import React from 'react';
import ReservationItem from './reservation_item';

class Reservation extends React.Component {
    constructor(props) {
        super(props)
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

      if (this.props.reservations.length === 0) {
        return (
          <div className="profile-container-wrapper">
            <div className="profile-header">No reservations found!</div>
          </div>
        );
      }

      return (
        <div className="profile-container">
          <div className="profile-block">
            
            <div className="profile-header">
              <h1>Your Reservations</h1>
            </div>

            {this.currentSort().map((res, i) => {
              return <ReservationItem key={i} res={res} deleteReservation={this.props.deleteReservation} />;
            })}

            <div className="profile-header">
              <h1>Your History</h1>
            </div>

            {this.historySort().map((res, i) => {
              return <ReservationItem key={i} res={res} deleteReservation={this.props.deleteReservation} />;
            })}
          </div>
        </div>
      );
    }
}

export default Reservation;