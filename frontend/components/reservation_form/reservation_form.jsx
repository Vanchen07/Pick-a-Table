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
      <div className="reservation-form-container">
        <div className="reservation-form-header">
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

        </form>
      </div>
    );
  }
}
    
export default ReservationForm;