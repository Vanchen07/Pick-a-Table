import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import '../../../app/assets/stylesheets/api/react_dates_overrides.css';
import 'react-dates/lib/css/_datepicker.css';
import { ANCHOR_LEFT, HORIZONTAL_ORIENTATION, OPEN_UP } from 'react-dates/lib/constants';
var moment = require('moment');

class SearchField extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      inputVal: '',
      matches: [],
      party: '',
      time: '',
      date: moment()
    };

    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePartyChange = this.handlePartyChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleInput(event) {
    const value = event.currentTarget.value;
    this.setState({inputVal: value});

    if(value.length === 0 ) {
      this.setState({matches: []});
    } else {
      const {allNeighborhoods} = this.props;
      let matches = [];

      allNeighborhoods.forEach(name => {
        const sub = name.slice(0, value.length);
        if (sub.toLowerCase() === value.toLowerCase()) {
          matches.push(name);
      } 
      });
      
      if (matches.length === 0) {
        matches.push('No matches');
      }
      this.setState({matches: matches});
    }
  }

  handlePartyChange(event) {
    this.setState({party: event.target.value});
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value});
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({inputVal: name});
    this.setState({matches: []});
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.addFilter("neighborhood", this.state.inputVal).then(this.props.history.push('/search'));
  }


  render() {
    const results = this.state.matches.map((result, i) => {
      return (
        <li className="search-result-match" key={i} onClick={this.selectName}>
        {result}
        </li>
        );
      });
    return(
      <div className="dtp-picker">  
        <form className="dtp-picker-form" onSubmit={this.handleSubmit}>
          <div className="dtp-picker-selectors-container">
            <div className="dtp-party-size">
              <label className="select-label-party" >{this.state.party === '' ? '2 People' : `${this.state.party} people`}<i class="fas fa-angle-down angle-icon"></i>
                <select className="party-dropdown" value={this.state.party} onChange={this.handlePartyChange}>
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
              </label>
            </div>
            <div className="dtp-date-picker">
              {/* <a className="select-label-party"> <i class="fas fa-angle-down angle-icon"></i></a> */}
              <input className="date-dropdown-search" type="date" />
            </div>
            <div className="dtp-time-picker">
                <label className="select-label-party" >{this.state.time === '' ? '7:00 PM' : `${this.state.time} PM`}<i class="fas fa-angle-down angle-icon"></i>
                <select className="party-dropdown" value={this.state.time} onChange={this.handleTimeChange}>
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
              </label>
            </div>
            <div className="dtp-picker-search-container">
              <input
                className="select-label-party search-input"
                onChange={this.handleInput}
                value={this.state.inputVal}
                placeholder='Neighborhood'/>
                
              {/* <div className='search-matches-container'> */}
                <ul className='search-matches-container search-matches'>
                  {results}
                </ul>
              {/* </div> */}
            </div>
            {/* <button className="dtp-picker-button"
                  onClick={this.handleSubmit} 
                  value={this.state.inputVal}>
                <span>Let's go</span>
            </button> */}
            <input className="dtp-picker-button" type="submit" value="Let's go"/>
          </div>
        </form>
      </div>
      // <div className='search-container'>
      //   <div className='search-field-container'>
      //     <input
      //       className='search-field'
      //       onChange={this.handleInput}
      //       value={this.state.inputVal}
      //       placeholder='Where shall we go...'/>
          
      //     <div className='search-matches-container'>
      //       <ul className='search-matches'>
      //         {results}
      //       </ul>
      //     </div>

      //   </div>
      //   <button className='search-button'
      //           onClick={this.handleSubmit} 
      //           value={this.state.inputVal}>
      //         <span>Let's go</span>
      //     </button>
      // </div>
    );
  }
};

export default SearchField;