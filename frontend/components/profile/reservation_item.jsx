import React from 'react';
import { convertTime } from '../../util/convert_time_util';
import { Link, withRouter } from 'react-router-dom';

class ReservationItem extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.deleteReservation(this.props.res.id)
    .then(() => window.location.reload());
  }

  render() {
    return (
      <div className="profile-item">
        <div className="profile-item-wrapper">
          <div className="profile-photo">
              {/* image here */}
          </div>
          <div className="profile-body">
            <div className="profile-name">
              <h3>{this.props.res.restaurant}</h3>
            </div>
            <div className="profile-date">{this.props.res.date}</div>
            <div className="profile-date">
              {convertTime(this.props.res.time)}
            </div>
            <div className="profile-info">
              Table for {this.props.res.party_size}
            </div>
            <Link className="modify-link" to={`/reservations/${this.props.res.id}`}>Modify Reservation</Link>
            <button className="modify-link" onClick={this.handleDelete}>Cancel Reservation</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReservationItem);