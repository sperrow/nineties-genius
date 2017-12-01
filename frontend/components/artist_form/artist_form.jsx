import React from 'react';
import { withRouter } from 'react-router';

class ArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img_url: '',
      author_id: props.userId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.artistId) {
      this.props.fetchArtist(this.props.match.params.artistId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artist) {
      let { id, name, img_url } = newProps.artist;
      img_url = img_url || '';
      this.setState({
        id,
        name,
        img_url
      });
    }

    if (this.props.location.pathname !== newProps.location.pathname) {
      this.setState({
        id: '',
        name: '',
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
    const artist = this.state;
    this.props.processForm({artist})
      .then(data => {
        this.props.history.push(`/artists/${data.artist.id}`);
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
    const title = this.props.match.params.artistId ? 'Edit Artist' : 'Add Artist';
    return (
      <section className="form-container">
        <h2>{title}</h2>
        <p className="required">* required</p>
        {this.renderErrors()}
        <hr className="hr" />
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>NAME *</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
              required
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

export default withRouter(ArtistForm);
