import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    let artists = this.props.artists.slice();
    artists = artists.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });

    return (
      <section className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="artists-heading">Artists</h2>
          </div>
          <div className="col-12">
            <div className="artist-list">
              {
                artists.map(artist => (
                  <ArtistIndexItem
                    artist={artist}
                    key={artist.id}
                    />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ArtistIndex;
