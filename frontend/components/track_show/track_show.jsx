import React from 'react';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.trackId);
  }

  render() {
    const track = this.props.track;
    return (
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
      </section>
    );
  }
}

export default TrackShow;
