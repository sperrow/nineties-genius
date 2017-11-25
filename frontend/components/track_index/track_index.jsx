import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    return (
      <section>
        {
          this.props.tracks.map(track => (
            <TrackIndexItem track={track} key={track.id} />
          ))
        }
      </section>
    );
  }
}

export default TrackIndex;
