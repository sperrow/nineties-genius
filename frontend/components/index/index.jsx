import React from 'react';
import { Link } from 'react-router-dom';
import StoriesContainer from '../stories/stories_container';
import TrackIndexContainer from '../track_index/track_index_container';

const Index = () => (
  <div className="index-container">
    <StoriesContainer />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <label className="label">TOP SONGS</label>
        </div>
        <div className="col-12">
          <TrackIndexContainer showArt={true} />
        </div>
      </div>
    </div>
  </div>
);

export default Index;
