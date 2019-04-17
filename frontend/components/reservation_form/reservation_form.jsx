import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { ANCHOR_LEFT, HORIZONTAL_ORIENTATION, OPEN_UP } from 'react-dates/lib/constants';
var moment = require('moment');

const isBeforeDay = (a, b) => {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;

  const aYear = a.year();
  const aMonth = a.month();

  const bYear = b.year();
  const bMonth = b.month();

  const isSameYear = aYear === bYear;
  const isSameMonth = aMonth === bMonth;

  if (isSameYear && isSameMonth) return a.date() < b.date();
  if (isSameYear) return aMonth < bMonth;
  return aYear < bYear;
};

const isInclusivelyAfterDay = (a, b) => {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return !isBeforeDay(a, b);
};

const defaultProps = {
  // example props for the demo
  // autoFocus: false,
  // initialDate: null,

  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepFocusOnInput: false,

  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => {},

  // internationalization props
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY'
};


class ReservationForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      party_size: '',
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
    this.props.createReservation(reservationParams);
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

 
  render() {
    // if(this.props.currentUserId){
    //   return null
    // }
    return (
      <div className="reservation-form-wrapper">
          <div className="reservation-form-header">
            <h3 className="form-header-title">
              <span className="title-span">Make a reservation</span>
            </h3>
          </div>
          <div className="reservation-form-body">
            <div className="form-input-fields">
              <div className="input-wrapper">
                <div className="input-box">
                  <div className="input-party-wrapper">
                    <div className="input-party-size">Party Size</div>
                    <div className="input-party-size-selection">
                      <div className="empty-selection"></div>
                      <i class="fas fa-angle-down caret"></i>
                      <select className="res-party-selection-dropdown" name="" id="">
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7">7 people</option>
                        <option value="8">8 people</option>
                        <option value="9">9 people</option>
                        <option value="10">10 people</option>
                        <option value="11">Larger Party</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-date-time-wrapper">
                    <div className="input-date">
                      <div className="date-label">Date</div>
                      <div className="date-dropdown">
                        <div className="date-placeholder">Thu, 5/2</div>
                        <i class="fas fa-angle-down caret"></i>
                      </div>
                    </div>
                    <div className="input-time">
                      <div className="date-label">Time</div>
                      <div className="date-dropdown">
                        <div className="date-placeholder">7:00 PM</div>
                        <i class="fas fa-angle-down caret"></i>
                        <select className="res-party-selection-dropdown" value={this.state.time} onChange={this.handleTimeChange}>
                            <option value="5:00">5:00 PM</option>
                            <option value="5:30">5:30 PM</option>
                            <option value="6:00">6:00 PM</option>
                            <option value="6:30">6:30 PM</option>
                            <option value="7:00">7:00 PM</option>
                            <option value="7:30">7:30 PM</option>
                            <option value="8:00">8:00 PM</option>
                            <option value="8:30">8:30 PM</option>
                            <option value="9:00">9:00 PM</option>
                            <option value="9:30">9:30 PM</option>
                            <option value="10:00">10:00 PM</option>
                            <option value="10:30">10:30 PM</option>
                            <option value="11:00">11:00 PM</option>
                        </select>
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
                    <div className="time-input-button-1">
                      <div>
                        <div className="timeslot">
                          <span>6:30 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="time-input-button-1">
                      <div>
                        <div className="timeslot">
                          <span>7:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="time-input-button-1">
                      <div>
                        <div className="timeslot">
                          <span>7:30 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="time-input-button-1">
                      <div>
                        <div className="timeslot">
                          <span>8:00 PM</span>
                        </div>
                      </div>
                    </div>
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
                    <span>Booked 38 times today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* <div className="reservation-form-header">
          Make a reservation
        </div>
        <form className="reservation-form-body" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div className="party-size">
                <label>Party Size
                    <select value={this.state.party_size} onChange={this.update('party_size')} >
                        <option value="1">For 1</option>
                        <option value="2">For 2</option>
                        <option value="3">For 3</option>
                        <option value="4">For 4</option>
                        <option value="5">For 5</option>
                        <option value="6">For 6</option>
                        <option value="7">For 7</option>
                        <option value="8">For 8</option>
                        <option value="9">For 9</option>
                        <option value="10">For 10</option>
                    </select>
                </label>
            </div>

            <div>
              <SingleDatePicker
                hideKeyboardShortcutsPanel
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
              />
            </div>

            <div className="select-a-time">Select a time:
            </div>

            <div className="time-slot-parent">
              {this.props.restaurant.remaining_time_slots.map(timeSlot => {
                return (
                    <div className="time-slots" onClick={()=> {this.setState({time_slot_id: timeSlot.id})}} >
                        <button className={`time-slot-button ${this.state.time_slot_id === timeSlot.id ? 'time-slot-button-selected' : ''}`}>
                          {timeSlot.formatted_start_time}
                        </button>
                    </div>
                )
              })}
            </div>

            <div className='submit-button'>
                <input className='submit-button-input' type="submit" value="Find a Table"/>
            </div>

        </form> */}
      </div>
    );
  }
}
    
export default ReservationForm;