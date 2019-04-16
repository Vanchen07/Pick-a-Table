import React from 'react';


export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      inputVal: '',
      matches: []
    };

    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({inputVal: name});
    this.setState({matches: []});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addFilter("neighborhood", this.state.inputVal).then(this.props.history.push('/search'))
  }


  render() {
    const results = this.state.matches.map((result, i) => {
      return (
        <li className="search-result-match" key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div className='search-container'>
        <div className='search-field-container'>
          <i className="search-icon" class="fas fa-search fa-lg"></i>
          <input
            className='search-field'
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Where shall we go...'/>
          
          <div className='search-matches-container'>
            <ul className='search-matches'>
              {results}
            </ul>
          </div>

        </div>
        <button className='search-button'
                onClick={this.handleSubmit} 
                value={this.state.inputVal}>
              <span>Let's go</span>
          </button>
      </div>
    );
  }
};