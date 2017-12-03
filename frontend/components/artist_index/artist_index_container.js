import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import ArtistIndex from './artist_index';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  artists: toArray(state.entities, 'artists')
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);
