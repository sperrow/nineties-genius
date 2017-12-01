import { connect } from 'react-redux';
import { fetchAlbum, createAlbum, updateAlbum } from '../../actions/album_actions';
import AlbumForm from './album_form';

const mapStateToProps = (state, ownProps) => {
  const album = ownProps.match.params.albumId ? state.entities.albums[ownProps.match.params.albumId] : null;
  return {
    userId: state.session.currentUser.id,
    album
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.params.albumId ? 'update' : 'create';
  const processForm = formType === 'update' ? updateAlbum : createAlbum;

  return {
    processForm: album => dispatch(processForm(album)),
    fetchAlbum: id => dispatch(fetchAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
