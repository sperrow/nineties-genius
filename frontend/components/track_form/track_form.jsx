import React from 'react';
import { withRouter } from 'react-router';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      lyrics: '',
      artist_id: '',
      album_id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = this.state;
    this.props.processForm({track});
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
    const title = this.props.formType === 'create' ? 'Add track' : 'Edit track';
    return (
      <div className="track-form-container">
        <h2>{title}</h2>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>Title:
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
              />
            </label>
          </div>
          <div className="input-container">
            <label>Lyrics:
              <textarea
                value={this.state.lyrics}
                onChange={this.update('lyrics')}
              />
            </label>
          </div>
          <div className="input-container">
            <label>Artist:
              <input
                type="text"
                value={this.state.artist_id}
                onChange={this.update('artist_id')}
              />
            </label>
          </div>
          <div className="input-container">
            <label>Album:
              <input
                type="text"
                value={this.state.album_id}
                onChange={this.update('album_id')}
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

export default withRouter(TrackForm);
