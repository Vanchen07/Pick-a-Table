import React from 'react';
import Navbar from '../navbar/nav_bar';
import ReservationItem from './reservation_item';

class Reservation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

      return (
        <div className="reservation-container">
          <div className="reservation-block">
            
            <div className="reservation-header">
              <h1>Your Reservations</h1>
            </div>

            {this.props.reservations.map((res, i) => {
              return <ReservationItem key={i} res={res} />;
            })}
          </div>
        </div>
      );
    }
}

export default Reservation;