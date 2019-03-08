import React from 'react';

class ReservationForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      party_size: '',
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
    const reservationParams = Object.assign({ user_id: this.props.currentUserId, restaurant_id: this.props.restaurant.id }, this.state);
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
      <div className="form-container">
        <form className="signup-form" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <label>
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

           {this.props.restaurant.remaining_time_slots.map(timeSlot => {
             return (
                <div onClick={()=> {this.setState({time_slot_id: timeSlot.id})}}>
                  {timeSlot.formatted_start_time}
                </div>
             )
           })}
            
            <input 
              className="signup-input" 
              type="submit" 
              value="Find a Table" />
        </form>
      </div>
    );
  }
}
    
export default ReservationForm;