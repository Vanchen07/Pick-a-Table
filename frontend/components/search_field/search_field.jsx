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
      matches: [],
      date: moment(),
      time: '',
      party: '',
      neighborhood: ''
    };

    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePartyChange = this.handlePartyChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleInput(event) {
    const value = event.currentTarget.value;
    this.setState({neighborhood: value});

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
    this.setState({neighborhood: name});
    this.setState({matches: []});
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state)
    this.props.addFilter("neighborhood", this.state.neighborhood).then(this.props.history.push('/search'));
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
    const results = this.state.matches.map((result, i) => {
      return (
        <div className="select-label-neighborhood">
          <li className="search-result-match" key={i} onClick={this.selectName}>
            {result}
          </li>
        </div>
        );
      });
    return(
      <div className="dtp-picker">  
        <form className="dtp-picker-form" onSubmit={this.handleSubmit}>
          <div className="dtp-picker-selectors-container">
            <div className="dtp-party-size">
              <label className="select-label-party" >{this.state.party === '' ? '1 Person' : `${this.state.party} people`}<i className="fas fa-angle-down angle-icon"></i>
                <select className="party-dropdown" value={this.state.party} onChange={this.handlePartyChange}>
                  {this.renderParty()}
                </select>
              </label>
            </div>
            <div className="dtp-date-picker">
              {/* <a className="select-label-party"> <i class="fas fa-angle-down angle-icon"></i></a> */}
              <input className="date-dropdown-search" type="date" />
            </div>
            <div className="dtp-time-picker">
                <label className="select-label-party" ><i className="fas fa-angle-down angle-icon"></i>
                <select className="party-dropdown" value={this.state.time} onChange={this.handleTimeChange}>
                  <option value="5:00" >5:00 PM</option>
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
                value={this.state.neighborhood}
                placeholder='Neighborhood'/>
                
              
                <ul className='search-matches-container search-matches'>
                  {results}
                </ul>
             
            </div>
            <input className="dtp-picker-button" type="submit" value="Let's go"/>
          </div>
        </form>
      </div>

    );
  }
};

export default SearchField;