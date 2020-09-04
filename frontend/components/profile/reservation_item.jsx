import React from 'react';
import { convertTime } from '../../util/convert_time_util';
import { Link } from 'react-router-dom';

const ReservationItem = (props) => {

  return (
    <div className="profile-item">
      <div className="profile-item-wrapper">
        <div className="profile-photo">
            {/* image here */}
        </div>
        <div className="profile-body">
          <div className="profile-name">
            <h3>{props.res.restaurant}</h3>
          </div>
          <div className="profile-date">{props.res.date}</div>
          <div className="profile-date">
            {convertTime(props.res.time)}
          </div>
          <div className="profile-info">
            Table for {props.res.party_size}
          </div>
          <Link className="modify-button" to={`/reservations/${props.res.id}`}>Modify Reservation</Link>
          <div>
            <button className="modify-button" to={`/reservations/${props.res.id}`}>Cancel Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;