import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: props.artist
    };
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId)
      .then(data => {
        let artist = data.artist;
        this.setState({ artist });
      });
  }

  render() {
    let details = null;
    if (this.state.artist) {
      const artist = this.state.artist;

      let imgUrl = artist.img_url || null;

      details = (
        <section className="artist-show">
          <div className="artist-header" style={
              {backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${imgUrl})`}
            }>
            <img className="artist-art" src={imgUrl} />
            <div className="artist-info">
              <h1 className="artist-name">{artist.name}</h1>
              <Link to={`/artists/${artist.id}/edit`}>Edit Artist</Link>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="albums-heading">Albums</h2>
                <hr className="hr" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="albums">
                  {
                    artist.albums.map(album => (
                      <div key={album.id} className="album">
                        <Link to={`/albums/${album.id}`}>
                          <img src={album.img_url} className="artist-art" />
                        </Link>
                        <p className="album-link">
                          <Link to={`/albums/${album.id}`}>{album.title}</Link>
                        </p>
                      </div>
                    ))
                  }
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

export default ArtistShow;
