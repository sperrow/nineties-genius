import React from 'react';
import { dateFormatter } from '../../utils/helpers';

const TrackSecondary = ({ track }) => (
  <div className="track-info-secondary">
    <div className="row">
      <div className="col-4">
        <p className="label">Release Date</p>
      </div>
      <div className="col-8">
        <p className="info-item">{dateFormatter(track.album_release_date)}</p>
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
        <p className="label">Added By</p>
      </div>
      <div className="col-8">
        <p className="info-item">@{track.author}</p>
      </div>
    </div>
  </div>
);

export default TrackSecondary;
