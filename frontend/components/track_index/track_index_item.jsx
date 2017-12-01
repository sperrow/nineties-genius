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
        <h2 className="title">{track.title}</h2>
        <span className="artist">{track.artist}</span>
      </div>
    );
  }
}

export default withRouter(TrackIndexItem);
