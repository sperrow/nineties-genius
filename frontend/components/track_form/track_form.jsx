import React from 'react';
import { withRouter } from 'react-router';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      lyrics: '',
      artist: '',
      genre: 'pop',
      album_title: '',
      release_date: '',
      img_url: '',
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
      const { id, title, lyrics, genre, artist, album } = newProps.track;
      let albumTitle = '';
      let releaseDate = '';
      let imgUrl = '';
      if (album) {
        if (album.title) {
          albumTitle = album.title;
        }
        if (album.release_date) {
          releaseDate = album.release_date;
        }
        if (album.img_url) {
          imgUrl = album.img_url;
        }
      }
      this.setState({
        id,
        title,
        lyrics,
        genre,
        artist,
        album_title: albumTitle,
        release_date: releaseDate,
        img_url: imgUrl
      });
    }

    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState({
        id: '',
        title: '',
        lyrics: '',
        genre: 'pop',
        artist: '',
        album_title: '',
        release_date: '',
        img_url: ''
      });
    }
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const track = this.state;
    this.props.processForm({track})
      .then(data => {
        this.props.history.push(`/tracks/${data.track.id}`);
      });
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
    const title = this.props.match.params.trackId ? 'Edit Song' : 'Add Song';
    return (
      <section className="form-container">
        <h2>{title}</h2>
        <p className="required">* required</p>
        {this.renderErrors()}
        <hr className="hr" />
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>BY *</label>
            <input
              type="text"
              value={this.state.artist}
              onChange={this.update('artist')}
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
            <label>GENRE *</label>
            <select value={this.state.genre} onChange={this.update('genre')}>
              <option value="rap">Rap</option>
              <option value="pop">Pop</option>
              <option value="r&b">R&B</option>
              <option value="rock">Rock</option>
              <option value="country">Country</option>
              <option value="non-music">Non-Music</option>
            </select>
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
            <label>ALBUM</label>
            <input
              type="text"
              value={this.state.album_title}
              onChange={this.update('album_title')}
            />
          </div>
          <div className="input-container">
            <label>RELEASE DATE (1990-1999 ONLY)</label>
            <input
              type="date"
              min="1990-01-01"
              max="1999-12-31"
              value={this.state.release_date}
              onChange={this.update('release_date')}
            />
          </div>
          <div className="input-container">
            <label>ALBUM COVER (URL)</label>
            <input
              type="text"
              value={this.state.img_url}
              onChange={this.update('img_url')}
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
