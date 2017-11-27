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
          <div className="row track-header" style={
            {backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${track.album_url})`}
          }>
            <div className="col-3">
              <img className="track-art" src={track.album_url} />
            </div>
            <div className="col-4">
              <div className="track-info">
                <h1 className="track-title">{track.title}</h1>
                <h2 className="track-artist"><Link to="#">{track.artist}</Link></h2>
                <p className="track-album label">Album <Link to="#">{track.album}</Link></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="lyrics">
                {
                  track.lyrics.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))
                }
              </div>
              <Link to={editUrl}>Edit Song</Link>
            </div>
          </div>
        </section>
      );
    }

    return details;
  }
}

export default TrackShow;
