import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import TrackIndex from './track_index';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tracks: toArray(state.entities, 'tracks')
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
