import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleDemo(e) {
    e.preventDefault();

    const demoLogin = () => {
      const user = this.state;
      setTimeout(() => (
        this.props.processForm({user})
      ), 1000);
    };

    this.setState({
      username: 'demo_user',
      password: 'password'
    }, demoLogin);
  }

  renderErrors() {
    if (this.props.errors.length === 0) return null;
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))
        }
      </ul>
    );
  }

  render() {
    const title = this.props.formType === 'signup' ? 'Create a new account' : 'Sign In';
    let demoBtn = null;
    if (this.props.formType === 'login') {
      demoBtn = (
        <div className="input-container">
          <button onClick={this.handleDemo} className="submit-btn">Demo Login</button>
        </div>
      );
    }
    return (
      <div className="session-form-container">
        <h2>{title}</h2>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>USERNAME</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </div>
          <div className="input-container">
            <label>PASSWORD</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </div>
          <div className="input-container">
            <button type="submit" className="submit-btn">{title}</button>
          </div>
          {demoBtn}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
