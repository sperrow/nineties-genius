import { connect } from 'react-redux';
import { fetchArtist, createArtist, updateArtist } from '../../actions/artist_actions';
import ArtistForm from './artist_form';

const mapStateToProps = (state, ownProps) => {
  const artist = ownProps.match.params.artistId ? state.entities.artists[ownProps.match.params.artistId] : null;
  return {
    userId: state.session.currentUser.id,
    errors: state.errors.artist,
    artist
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.params.artistId ? 'update' : 'create';
  const processForm = formType === 'update' ? updateArtist : createArtist;

  return {
    processForm: artist => dispatch(processForm(artist)),
    fetchArtist: id => dispatch(fetchArtist(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistForm);
