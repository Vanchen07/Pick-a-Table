import React from 'react';
import { convertTime } from '../../util/convert_time_util';

const ReservationItem = (props) => {

    return (
      <div className="reservation-item">
        <div className="reservation-name">
          <h3>{props.res.restaurant}</h3>
        </div>
        <div className="reservation-body">
          <div>{props.res.date}</div>
          <div>{convertTime(props.res.time)}</div>
          <div>Table for {props.res.party_size}</div>
        </div>
      </div>
    );
}

export default ReservationItem;