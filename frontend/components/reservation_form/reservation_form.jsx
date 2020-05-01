import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import swal from 'sweetalert';

var moment = require('moment');


class ReservationForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      party_size: '2',
      date: moment(),
      time_slot_id: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const reservationParams = Object.assign({ 
      user_id: this.props.currentUserId,
      restaurant_id: this.props.restaurant.id,
      party_size: this.state.party_size,
      time_slot_id: this.state.time_slot_id,
      date: this.state.date.format()
    });


    this.props.createReservation(reservationParams).then(this.props.history.push('/search'));

      if(this.props.currentUserId){
        return swal("Thank You!", "Your reservation is confirmed!", "success");
      } else {
        return swal("Sorry!", "Please log in to continue", "error");
      }
      
  }

  
  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error} 
            </li>
          ))}
        </ul>
      );
    } else {
      return null
    }
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  renderParty() {
    let party = [];

    for (let i = 1; i <= 11; i++) {
      party.push(i);
    }

    return party.map((qty, idx) => {
      let val;
      if (qty === 1) {
        val = `${qty} person`;
      } else if (qty === 11) {
        val = 'Larger Party'
      }
      else {
        val = `${qty} people`;
      }

      return <option key={idx} value={qty.toString()}>{val}</option>
    })
  }
 
  render() {
    // if(this.props.currentUserId){
    //   return null
    // }
    return (
      <div className="reservation-form-wrapper">
          <a name="reservations"></a>
          <div className="reservation-form-header">
            <h3 className="form-header-title">
              <span className="title-span">Make a reservation</span>
            </h3>
          </div>
          <form className="reservation-form-body" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div className="form-input-fields">
              <div className="input-wrapper">
                <div className="input-box">
                  <div className="input-party-wrapper">
                    <div className="input-party-size">Party Size</div>
                    <div className="input-party-size-selection">
                      <i className="fas fa-angle-down caret"></i>
                      <select className="res-party-selection-dropdown" value={this.state.party_size} onChange={this.update('party_size')}>
                        {this.renderParty()}
                      </select>
                    </div>
                  </div>
                  <div className="input-date-time-wrapper">
                    <div className="input-date">
                      <div className="date-label">Date</div>
                      <div className="date-dropdown">
                        <i className="fas fa-angle-down caret"></i>
                        <input className="date-dropdown" type="date" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="time-input-buttons-wrapper">
              <span className="time-input-buttons-span">
                <div className="time-input-buttons-header">
                  <span>Select a time</span>
                </div>
                <div className="time-input-buttons-body">
                  <div>
                  {this.props.restaurant.remaining_time_slots.map(timeSlot => {
                return (
                    <div className="time-input-button-1" onClick={()=> {this.setState({time_slot_id: timeSlot.id})}} >
                        <div className={`timeslot ${this.state.time_slot_id === timeSlot.id ? 'time-slot-button-selected' : ''}`}>
                          {timeSlot.formatted_start_time}
                        </div>
                    </div>
                )
              })}
                  </div>
                </div>
              </span>
            </span>
            <div className="res-button-wrapper">
              <button className="res-button">
                <span>Find a Table</span>
              </button>
            </div>
            <div className="form-footer">
              <div className="form-footer-booked">
                <div className="form-footer-icon"><i class="fas fa-chart-line"></i></div>
                <div className="form-footer-text">
                  <div className="form-footer-text-span">
                    <span>Booked {Object.keys(this.props.reservations).length} times today</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
      </div>
    );
  }
}
    
export default ReservationForm;