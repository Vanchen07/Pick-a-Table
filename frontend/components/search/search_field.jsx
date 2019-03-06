import React from 'react';


export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      inputVal: ''
    };

    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const {allNeighborhoods} = this.props;
 
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return allNeighborhoods;
    }

    allNeighborhoods.forEach(name => {
      const sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addFilter("neighborhood", this.state.inputVal)
  }


  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
          <ul>
              {results}
          </ul>
        </div>
        <button
                onClick={this.handleSubmit} 
                value={this.state.inputVal}>
              <span>Let's go</span>
          </button>
      </div>
    );
  }
};