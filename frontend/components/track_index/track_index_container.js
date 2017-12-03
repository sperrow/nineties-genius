import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import TrackIndex from './track_index';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let tracks;
  if (ownProps.tracks) {
    tracks = ownProps.tracks;
  } else {
    tracks = toArray(state.entities, 'tracks');
  }

  return {tracks};
};

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
