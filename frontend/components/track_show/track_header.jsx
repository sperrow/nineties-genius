import React from 'react';
import { Link } from 'react-router-dom';

const TrackHeader = ({ track }) => (
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
);

export default TrackHeader;
