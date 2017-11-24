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
    const title = this.props.formType === 'signup' ? 'Create a new account' : 'Log In';
    return (
      <div className="session-form-container">
        <h2>{title}</h2>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                />
            </label>
          </div>
          <div className="input-container">
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
          </div>
          <div className="input-container">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
