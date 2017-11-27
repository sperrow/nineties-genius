import React from 'react';
import { withRouter } from 'react-router';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      lyrics: '',
      artist_id: '',
      album_id: '',
      author_id: props.userId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.trackId) {
      this.props.fetchTrack(this.props.match.params.trackId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.track) {
      const { id, title, lyrics, artist_id, album_id } = newProps.track;
      this.setState({
        id,
        title,
        lyrics,
        artist_id,
        album_id
      });
    }
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
    this.props.history.push('/');
  }

  renderErrors() {
    if (!this.props.errors) return null;
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
    const title = this.props.formType === 'create' ? 'Add Song' : 'Edit Song';
    return (
      <section className="track-form-container">
        <h2>{title}</h2>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>BY * (id #)</label>
            <input
              type="text"
              value={this.state.artist_id}
              onChange={this.update('artist_id')}
              />
          </div>
          <div className="input-container">
            <label>TITLE *</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />
          </div>
          <div className="input-container">
            <label>LYRICS *</label>
            <textarea
              cols="40"
              rows="20"
              value={this.state.lyrics}
              onChange={this.update('lyrics')}
            />
          </div>
          <div className="input-container">
            <label>ALBUM (id #)</label>
            <input
              type="text"
              value={this.state.album_id}
              onChange={this.update('album_id')}
            />
          </div>
          <div className="input-container">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(TrackForm);
