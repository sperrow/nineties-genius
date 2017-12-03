import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  componentDidMount() {
    if (!this.props.album) {
      this.props.fetchTracks();
    }
  }

  render() {
    return (
      <section className="track-list">
        {
          this.props.tracks.map(track => (
            <TrackIndexItem
              track={track}
              key={track.id}
              art={
                this.props.showArt ? true : false
              }
            />
          ))
        }
      </section>
    );
  }
}

export default TrackIndex;
