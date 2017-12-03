import React from 'react';
import { withRouter } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const artistId = this.props.artist.id;
    this.props.history.push(`/artists/${artistId}`);
  }

  render() {
    const artist = this.props.artist;

    return (
      <div className="artist-item" onClick={this.handleClick}>
        <div className="artist-info">
          <h2 className="name">{artist.name}</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(ArtistIndexItem);
