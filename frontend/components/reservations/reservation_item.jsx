import React from 'react';
import { convertTime } from '../../util/convert_time_util';

const ReservationItem = (props) => {

    return (
      <div className="reservation-item">
        <div className="reservation-item-wrapper">
          <div className="reservation-photo">image here</div>
          <div className="reservation-body">
            <div className="reservation-name">
              <h3>{props.res.restaurant}</h3>
            </div>
            <div className="reservation-date">{props.res.date}</div>
            <div className="reservation-date">
              {convertTime(props.res.time)}
            </div>
            <div className="reservation-info">
              Table for {props.res.party_size}
            </div>
            <a className="modify-button" href="#">Modify Reservation</a>
          </div>
        </div>
      </div>
    );
}

export default ReservationItem;