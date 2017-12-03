import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const trackId = this.props.track.id;
    this.props.history.push(`/tracks/${trackId}`);
  }

  render() {
    const track = this.props.track;

    let imgUrl = null;
    if (track.album) {
      imgUrl = track.album.img_url;
    }

    let img = null;
    if (this.props.art) {
      img = <img className="album-img" src={imgUrl} />;
    }

    return (
      <div className="track-item" onClick={this.handleClick}>
        {img}
        <div className="track-info">
          <h2 className="title">{track.title}</h2>
          <span className="artist">{track.artist}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackIndexItem);
