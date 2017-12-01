import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';

const mapStateToProps = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.artistId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);
