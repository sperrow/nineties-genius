import React from 'react';
import { withRouter } from 'react-router';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img_url: '',
      artist_id: '',
      release_date: '',
      author_id: props.userId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.albumId) {
      this.props.fetchAlbum(this.props.match.params.albumId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.album) {
      let { id, title, img_url, release_date, artist_id } = newProps.album;
      img_url = img_url || '';
      this.setState({
        id,
        title,
        img_url,
        release_date,
        artist_id
      });
    }

    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState({
        id: '',
        name: '',
        img_url: '',
        release_date: '',
        artist_id: ''
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
    const album = this.state;
    this.props.processForm({album})
      .then(data => {
        this.props.history.push(`/albums/${data.album.id}`);
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
    const title = this.props.match.params.albumId ? 'Edit Album' : 'Add Album';
    return (
      <section className="form-container">
        <h2>{title}</h2>
        <p className="required">* required</p>
        {this.renderErrors()}
        <hr className="hr" />
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>TITLE *</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              required
            />
          </div>
          <div className="input-container">
            <label>BY *</label>
            <input
              type="text"
              value={this.state.artist_id}
              onChange={this.update('artist_id')}
              required
              disabled
            />
          </div>
          <div className="input-container">
            <label>RELEASE DATE (1990-1999 ONLY) *</label>
            <input
              type="date"
              min="1990-01-01"
              max="1999-12-31"
              value={this.state.release_date}
              onChange={this.update('release_date')}
            />
          </div>
          <div className="input-container">
            <label>IMAGE URL</label>
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

export default withRouter(AlbumForm);
