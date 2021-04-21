import React from 'react';
import { Route, Switch } from 'react-router';
import ReservationItem from './reservation_item';

class ReservationsIndex extends React.Component {
    constructor(props) {
        super(props)
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
              <h1>{`Your ${this.props.route}`}</h1>
            </div>

            {this.props.reservations.map((res, i) => {
              return <ReservationItem key={i} res={res} deleteReservation={this.props.deleteReservation} />;
            })}

          </div>
        </div>
      );
    }
}

export default ReservationsIndex;