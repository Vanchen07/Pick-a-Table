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
        <div className="form-cta">
          <h3 className="cta-welcome">Please Sign in</h3>
        </div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
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
              id="signup-button" 
              type="submit" 
              value="Sign In" />
        </form>

        <div className="cta-demo-header">
          <h3>Don't want to complete the form?</h3>
        </div>
        <div className="cta-demo">
          <button className="demo-button"
                onClick={this.handleDemoSubmit} 
                value="Demo Sign In">
              <span>Continue with Demo</span>
          </button>
        </div>
        <div >
          <span className="cta-legal"> New to Pick-A-Table?
          <a href="#" onClick={this.props.openSignupModal}> Create an account</a>
          </span>
        </div>
        <div className="cta-end">
          <span></span>
        </div>
      </div>
    );
  }
}


export default SessionForm;