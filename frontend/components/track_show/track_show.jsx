import React from 'react';
import { Link } from 'react-router-dom';

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
    this.handleAnnotationUnmount = this.handleAnnotationUnmount.bind(this);
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

  handleAnnotationUnmount() {
    this.setState({
      referent: null
    });
  }

  render() {
    let details = null;
    if (this.props.track) {
      const track = this.props.track;
      const editUrl = `/tracks/${track.id}/edit`;
      let lyrics = null;

      if (track.referents) {
        lyrics =
          <Lyrics
            lyrics={track.lyrics}
            fragment={track.referents}
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
                <Link to={editUrl}>Edit Song</Link>
              </div>
              <div className="col-5">
                {
                  this.state.referent ?
                  <Annotation
                    referent={this.state.referent}
                    unmountMe={this.handleAnnotationUnmount}
                  /> : <TrackSecondary track={track} />
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
