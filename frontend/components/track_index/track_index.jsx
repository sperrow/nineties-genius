import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  componentDidMount() {
    if (!this.props.album) {
      this.props.fetchTracks();
    }
  }

  render() {
    let tracks = this.props.tracks;
    if (!this.props.album) {
      tracks = tracks.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return 1;
        } else if (a.popularity > b.popularity) {
          return -1;
        } else {
          return 0;
        }
      });
      tracks = tracks.slice(0, 20);
    }

    return (
      <section className="track-list">
        {
          tracks.map(track => (
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
