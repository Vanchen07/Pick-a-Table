import React from 'react';
import { convertTime } from '../../util/convert_time_util';
import swal from 'sweetalert';
import Navbar from '../navbar/nav_bar_container';
import { Link } from 'react-router-dom';
// import Sidebar from '../profile/sidebar';

class UpdateReservationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            party_size: '',
            date: '',
            time_slot_id: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let name;
        this.props.fetchReservation(this.props.match.params.id)
            .then((res) => {
                name = res.reservation.restaurant
                this.setState({
                    party_size: res.reservation.party_size,
                    date: res.reservation.date,
                    time_slot_id: res.reservation.time_slot_id,
                })
            })
        .then(() => this.props.fetchRestaurant(name))
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const reservationParams = Object.assign({
            id: parseInt(this.props.match.params.id),
            user_id: this.props.currentUserId,
            restaurant_id: this.props.restaurant.id,
            party_size: this.state.party_size,
            time_slot_id: this.state.time_slot_id,
            date: this.state.date
        });

        if (this.props.currentUserId) {
            this.props.updateReservation(reservationParams)
                .then(() => swal("Thank You!", "Your reservation is updated!", "success"))
                .then(() => this.props.history.push('/reservations'));

            // return swal("Thank You!", "Your reservation is updated!", "success");
        } else {
            return swal("Sorry!", "Something went wrong", "error");
        }

    }


    renderErrors() {
        if (this.props.errors) {
            return (
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
        // console.log(this.state)
        // console.log(this.props)
        // console.log(this.props.restaurant.name)
        if(!this.props.restaurant){
          return null
        }

        // this.props.reservation.restaurant

        return (
            <div >
                <div>
                    <Navbar />
                </div>
                <div className="update-res-wrapper">
                    {/* <Sidebar /> */}
                    <div className="update-res-container"> 
                        <div className="reservation-form-wrapper">
                            <div className="reservation-form-header">
                                <h3 className="form-header-title">
                                    <span id="scroll-reservation" className="title-span">
                                        Edit a reservation
                                    </span>
                                </h3>
                                {/* <div>{this.props.reservation[0].restaurant}</div> */}
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
                                                    <select
                                                        className="res-party-selection-dropdown"
                                                        value={this.state.party_size}
                                                        onChange={this.update("party_size")}
                                                    >
                                                        {this.renderParty()}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="input-date-time-wrapper">
                                                <div className="input-date">
                                                    <div className="date-label">Date</div>
                                                    <div className="date-dropdown">
                                                        <i className="fas fa-angle-down caret"></i>
                                                        <input
                                                            required
                                                            className="date-dropdown"
                                                            type="date"
                                                            value={this.state.date}
                                                            onChange={this.update("date")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-date-time-wrapper">
                                                <div className="input-date">
                                                    <div className="date-label">Restaurant</div>
                                                    <div className="name-dropdown">
                                                        {this.props.reservation.restaurant}
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
                                                {this.props.restaurant.remaining_time_slots.map(
                                                    (timeSlot, i) => {
                                                        // console.log(this.state.time_slot_id)
                                                        // console.log(timeSlot.id)
                                                        // console.log(this.state.time_slot_id === timeSlot.id)
                                                        return (
                                                            <div
                                                                key={i}
                                                                className="time-input-button-1"
                                                                onClick={() => {
                                                                    this.setState({ time_slot_id: timeSlot.id });
                                                                }}
                                                            >
                                                                <div
                                                                    className={`timeslot ${
                                                                        this.state.time_slot_id === timeSlot.id
                                                                            ? "time-slot-button-selected"
                                                                            : ""
                                                                        }`}
                                                                >
                                                                    {timeSlot.formatted_start_time}
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </span>
                                </span>
                                <div className="res-button-wrapper">
                                    <button className="res-button">
                                        <span>Update Table</span>
                                    </button>
                                </div>
                                <div className="form-footer">
                                    <div className="form-footer-booked">
                                        <div className="form-footer-icon">
                                            <i className="fas fa-chart-line"></i>
                                        </div>
                                        <div className="form-footer-text">
                                            <div className="form-footer-text-span">
                                                {/* <span> */}
                                                    <Link to="/reservations">Back to Reservations</Link>
                                                {/* </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateReservationForm;