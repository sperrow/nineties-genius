import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormatter } from '../../utils/helpers';

import Lyrics from './lyrics';

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
      let date = dateFormatter(track.album_release_date);
      let lyrics = null;

      if (track.referents) {
        lyrics = <Lyrics lyrics={track.lyrics} fragment={track.referents[0].fragment} />;
      }

      details = (
        <section className="track-show">
          <div className="row track-header" style={
            {backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${track.album_url})`}
          }>
            <div className="col-3">
              <img className="track-art" src={track.album_url} />
            </div>
            <div className="col-5">
              <div className="track-info">
                <h1 className="track-title">{track.title}</h1>
                <h2 className="track-artist"><Link to="#">{track.artist}</Link></h2>
                <p className="track-album label">Album <Link to="#">{track.album}</Link></p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-7">
                {
                  lyrics
                }
                <Link to={editUrl}>Edit Song</Link>
              </div>
              <div className="col-5">
                <div className="track-info-secondary">
                  <div className="row">
                    <div className="col-4">
                      <p className="label">Release Date</p>
                    </div>
                    <div className="col-8">
                      <p className="info-item">{date}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="label">Genre</p>
                    </div>
                    <div className="col-8">
                      <p className="info-item genre">{track.genre}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="label">Added By</p>
                    </div>
                    <div className="col-8">
                      <p className="info-item">@{track.author}</p>
                    </div>
                  </div>
                </div>
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
