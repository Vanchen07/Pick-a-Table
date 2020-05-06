import React from 'react';
import { convertTime } from '../../util/convert_time_util';

const ReservationItem = (props) => {

    return (
      <div className="reservation-item">
        <div>{props.res.restaurant}</div>
        <div>{props.res.date}</div>
        <div>{convertTime(props.res.time)}</div>
        <div>Table for {props.res.party_size}</div>
      </div>
    );
}

export default ReservationItem;