import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
