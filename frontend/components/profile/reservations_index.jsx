import React from 'react';
import ReservationItem from './reservation_item';

class Reservation extends React.Component {
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
              <h1>Your Reservations</h1>
            </div>

            {this.props.reservations.reverse().map((res, i) => {
              return <ReservationItem key={i} res={res} />;
            })}
          </div>
        </div>
      );
    }
}

export default Reservation;