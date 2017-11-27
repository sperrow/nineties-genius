import React from 'react';
import { Link } from 'react-router-dom';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  render() {
    let details = null;
    if (this.props.track) {
      const track = this.props.track;
      const editUrl = `/tracks/${track.id}/edit`;

      details = (
        <section className="track-show">
          <div>
            <h2>{track.title}</h2>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <p>{track.track_number}</p>
          </div>
          <div>
            <p>{track.lyrics}</p>
          </div>
          <Link to={editUrl}>Edit Song</Link>
        </section>
      );
    }

    return details;
  }
}

export default TrackShow;
