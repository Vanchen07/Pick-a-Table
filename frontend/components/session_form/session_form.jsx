import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.loginForm(user).then(this.props.closeModal);
  }


  demo(user) {
    const intervalSpeed = 75;
    const {email, password} = user;
    const demoEmailTime = email.length * intervalSpeed;
    const demoPasswordTime = password.length * intervalSpeed;
    const buffer = intervalSpeed * 2;
    const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;

    this.demoEmail(email, intervalSpeed);
    setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);

    setTimeout(() => this.props.loginForm(user), totalDemoTime)

    setTimeout(() => this.props.closeModal(), totalDemoTime + buffer)
  }

  demoEmail(email, intervalSpeed) {
    let i = 0;

    setInterval(() => {
      if (i <= email.length) {
        this.setState({email: email.slice(0, i)})
        i++
      } else {
        clearInterval()
      }
    }, intervalSpeed);
  }

  demoPassword(password, intervalSpeed) {
    let j = 0;

    setInterval(() => {
      if (j <= password.length) {
        this.setState({password: password.slice(0, j)})
        j++
      } else {
        clearInterval();
      }
    }, intervalSpeed);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = {email: "Demo_User@demo.com", password: "password" };
    this.demo(user)
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
         
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <div className="form-cta">Please Sign in</div>
            {this.renderErrors()}
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
                className="signup-input"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
                className="signup-input"
              />
  
            <input 
              className="session-submit" 
              type="submit" 
              value="Sign In" />
          </div>
        </form>
        <button
              className="session-submit" 
              onClick={this.handleDemoSubmit} 
              value="Demo Sign In">Demo Sign In
        </button>
         <div >
           New to Pick-A-Table? <a href="#" onClick={this.props.openSignupModal}>Create an account</a>
         </div>
      </div>
    );
  }
}

export default SessionForm; 