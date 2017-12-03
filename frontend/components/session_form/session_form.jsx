import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

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

  componentDidMount() {
    this.props.clearSessionErrors();
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
    this.props.clearSessionErrors();
    this.props.processForm({user});
  }

  handleDemo(e) {
    e.preventDefault();

    this.setState({
      username: '',
      password: ''
    });

    const username = 'demo_user';
    const password = 'password';

    for (let i = 0; i < username.length; i++) {
      setTimeout(() => {
        this.setState({
          username: this.state.username + username[i]
        });
      }, 50 * i);
    }

    for (let i = 0; i < password.length; i++) {
      if (i === password.length - 1) {
        setTimeout(() => {
          this.setState({
            password: this.state.password + password[i]
          });
          const user = this.state;
          setTimeout(() => {
            this.props.processForm({user});
          }, 100);
        }, 50 * i + 450);
      } else {
        setTimeout(() => {
          this.setState({
            password: this.state.password + password[i]
          });
        }, 50 * i + 450);
      }
    }
  }

  renderErrors() {
    if (this.props.errors.length === 0) return null;
    return (
      <ul className="errors">
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))
        }
      </ul>
    );
  }

  render() {
    const title = this.props.formType === 'signup' ? 'Create a new account' : 'Sign in';
    const link = this.props.formType === 'signup' ? '/login' : '/signup';
    const linkTitle = this.props.formType === 'login' ? "Don't have an account? Sign up" : "Have an account? Sign in";
    let demoBtn = null;
    if (this.props.formType === 'login') {
      demoBtn = (
        <button onClick={this.handleDemo} className="submit-btn demo-btn">Demo Login</button>
      );
    }
    return (
      <div className="session-form-container">
        <h2 className="title">{title}</h2>
        <hr className="hr" />
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label className="label">USERNAME</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              required
            />
          </div>
          <div className="input-container">
            <label className="label">PASSWORD</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              required
            />
          </div>
          <div className="submit-container">
            <button type="submit" className="submit-btn">{title}</button>
            {demoBtn}
          </div>
        </form>
        <div className="input-container">
          <Link to={link} onClick={this.props.handleCloseModal} className="change-link">{linkTitle}</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
