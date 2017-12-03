import React from 'react';
import { withRouter } from 'react-router';
import FormLyrics from './form_lyrics';
import TrackHeader from '../track_show/track_header';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track: props.track,
      body: '',
      errors: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.trackId) {
      this.props.fetchTrack(this.props.match.params.trackId)
        .then(data => {
          let track = data.track;
          this.setState({ track });
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

  handleClick(e) {
    e.preventDefault();
    let el = e.currentTarget;
    if (el.classList.contains('clickable')) {
      if (el.classList.contains('selected')) {
        el.classList.remove('selected');
      } else {
        el.classList.add('selected');
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let lines = document.querySelectorAll('.selected');
    let arr = Array.from(lines);
    let pass = true;

    if (!arr.length) {
      pass = false;
      this.setState({errors: ['Please select at least one verse']});
    }

    for (let i = 0; i < arr.length - 1; i++) {
      let val1 = parseInt(arr[i].attributes['data-id'].value);
      let val2 = parseInt(arr[i + 1].attributes['data-id'].value);
      if (val1 + 1 !== val2) {
        pass = false;
        this.setState({errors: ['Lyrics must be consecutive']});
      }
    }

    if (pass) {
      this.setState({errors: []});

      let fragment = arr.map(line => line.innerText).join('\\n');

      let annotation = {
        body: this.state.body,
        track_id: this.state.track.id,
        fragment
      };

      this.props.createAnnotation({annotation})
        .then(() => {
          this.props.history.push(`/tracks/${this.state.track.id}`);
        });
    }
  }

  renderErrors() {
    if (!this.state.errors.length) return null;
    return (
      <ul className="errors">
        {
          this.state.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))
        }
      </ul>
    );
  }

  render() {
    let lyrics = null;
    let trackHeader = null;

    if (this.state.track) {
      const track = this.state.track;

      trackHeader = <TrackHeader track={track} />;

      if (track.referents) {
        lyrics =
        <FormLyrics
          lyrics={track.lyrics}
          referents={track.referents}
          handleClick={this.handleClick}
        />;
      }
    }

    return (
      <section className="annotation-form-container">
        {trackHeader}
        <form onSubmit={this.handleSubmit}>
          <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Click lines to annotate (must be consecutive)</h2>
              <hr className="hr" />
            </div>
            <div className="col-7">
              {lyrics}
            </div>
            <div className="col-5">
              <div className="annotation-inputs-container">
                <div className="annotation-inputs">
                  {this.renderErrors()}
                  <textarea
                    placeholder="Add an annotation"
                    value={this.state.body}
                    onChange={this.update('body')}
                    required
                    />
                  <button type="submit" className="submit-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </section>
    );
  }
}

export default withRouter(AnnotationForm);
