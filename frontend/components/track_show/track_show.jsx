import React from 'react';

import TrackHeader from './track_header';
import TrackSecondary from './track_secondary';
import Lyrics from './lyrics';
import Annotation from './annotation';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      referent: null
    };

    this.handleRefClick = this.handleRefClick.bind(this);

    const closeAnnotation = e => {
      const a = document.getElementsByClassName('annotation-container')[0];
      if (a && !a.contains(e.target) && !e.target.classList.contains('annotation-line')) {
        this.setState({
          referent: null
        });
      }
    };

    document.addEventListener('click', closeAnnotation);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  handleRefClick(refId) {
    return (e) => {
      e.preventDefault();
      const referent = this.props.track.referents.find(ref => {
        return ref.id === parseInt(refId);
      });
      this.setState({
        referent
      });
    };
  }

  render() {
    let details = null;
    if (this.props.track) {
      const track = this.props.track;
      let lyrics = null;

      if (track.referents) {
        lyrics =
          <Lyrics
            lyrics={track.lyrics}
            referents={track.referents}
            handleClick={this.handleRefClick}
          />;
      }

      details = (
        <section className="track-show">
          <TrackHeader track={track} />
          <div className="container">
            <div className="row">
              <div className="col-7">
                {lyrics}
              </div>
              <div className="col-5">
                {
                  this.state.referent ?
                  <Annotation referent={this.state.referent} /> :
                  <TrackSecondary track={track} />
                }
              </div>
            </div>
          </div>
        </section>
      );
    }

    return details;
  }
}

export default TrackShow;
