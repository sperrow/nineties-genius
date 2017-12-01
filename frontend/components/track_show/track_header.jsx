import React from 'react';
import { Link } from 'react-router-dom';

const TrackHeader = ({ track }) => {
  let imgUrl = null;
  let albumName = 'unknown';

  if (track.album) {
    imgUrl = track.album.img_url;
  }

  let albumLink = track.album_id ? (
    <Link to={`/albums/${track.album_id}`}>{track.album.title}</Link>
  ) : 'unknown';

  return (
    <div className="track-header" style={
        {backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${imgUrl})`}
      }>
      <img className="track-art" src={imgUrl} />
      <div className="track-info">
        <h1 className="track-title">{track.title}</h1>
        <h2 className="track-artist"><Link to={`/artists/${track.artist_id}`}>{track.artist}</Link></h2>
        <p className="track-album label">Album {albumLink}</p>
      </div>
    </div>
  );
};

export default TrackHeader;
