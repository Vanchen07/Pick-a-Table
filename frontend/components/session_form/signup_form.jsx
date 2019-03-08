import React from 'react';

class SignupForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
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
    const user = Object.assign({}, this.state);
    this.props.signupForm(user).then(this.props.closeModal);
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
    if(this.props.currentUserId){
      return null
    }
    return (
      <div className="form-container">
        <div className="form-cta">
          <h3 className="cta-welcome">Welcome to Pick-A-Table!</h3>
        </div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="signup-input"
              placeholder="First Name"
            />
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="signup-input"
              placeholder="Last Name"
            />
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="signup-input"
              placeholder="Email"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="signup-input"
              placeholder="Password"
            />
            <input 
              className="signup-input" 
              type="submit" 
              value="Create Account" />
        </form>

        <div className="cta-demo-header">
          <h3>Don't want to complete the form?</h3>
        </div>
        <div className="cta-demo">
          <button className="demo-button"
                onClick={() => this.props.loginForm({email: "Demo_User@demo.com", password: "password" }).then(this.props.closeModal)}
                value="Demo Sign In">
            <span>Continue with Demo</span>
          </button>
        </div>
        {/* <div >
          <span className="cta-legal">This is clone for learning purposes</span>
        </div> */}
        <div className="cta-end">
          <span></span>
        </div>
      </div>
    );
  }
}
    
export default SignupForm;