import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormatter } from '../../utils/helpers';
import TrackIndexContainer from '../track_index/track_index_container';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      album: props.album
    };
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
      .then(data => {
        let album = data.album;
        this.setState({ album });
      });
  }

  render() {
    let details = null;
    if (this.state.album) {
      const album = this.state.album;

      let imgUrl = album.img_url || null;

      details = (
        <section className="album-show">
          <div className="album-header" style={
              {backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${imgUrl})`}
            }>
            <img className="album-art" src={imgUrl} />
            <div className="album-info">
              <h1 className="album-title">{album.title}</h1>
              <h2 className="album-artist"><Link to={`/artists/${album.artist_id}`}>{album.artist}</Link></h2>
              <p className="album-date">{dateFormatter(album.release_date)}</p>
              <Link to={`/albums/${album.id}/edit`}>Edit Album</Link>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="tracks-heading">Tracks</h2>
                <hr className="hr" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <TrackIndexContainer tracks={album.tracks} />
              </div>
            </div>
          </div>
        </section>
      );
    }

    return details;
  }
}

export default AlbumShow;
