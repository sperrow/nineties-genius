import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormatter } from '../../utils/helpers';

const TrackSecondary = ({ track }) => {
  let releaseDate = 'unknown';

  if (track.album) {
    if (track.album.release_date) {
      releaseDate = dateFormatter(track.album.release_date);
    }
  }

  return (
    <div className="track-info-secondary">
    <div className="row">
      <div className="col-4">
        <p className="label">Release Date</p>
      </div>
      <div className="col-8">
        <p className="info-item">{releaseDate}</p>
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
        <p className="label">Last Edit By</p>
      </div>
      <div className="col-8">
        <p className="info-item">@{track.author}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p className="info-item">
          <Link to={`/tracks/${track.id}/annotations/new`}>
            <button className="submit-btn annotation-btn">Add Annotation</button>
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default TrackSecondary;
