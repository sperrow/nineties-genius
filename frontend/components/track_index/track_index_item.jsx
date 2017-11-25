import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const trackId = this.props.track.id;
    this.props.history.push(`tracks/${trackId}`);
  }

  render() {
    const track = this.props.track;
    return (
      <div className="track-item" onClick={this.handleClick}>
        <span>Title: {track.title}</span>
        <span>Artist: {track.artist}</span>
        <span>Album: {track.album}</span>
      </div>
    );
  }
}

export default withRouter(TrackIndexItem);
