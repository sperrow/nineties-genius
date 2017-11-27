import { connect } from 'react-redux';
import { fetchTrack, createTrack, updateTrack } from '../../actions/track_actions';
import TrackForm from './track_form';

const mapStateToProps = (state, ownProps) => {
  const track = ownProps.match.params.trackId ? state.entities.tracks[ownProps.match.params.trackId] : null;
  return {
    userId: state.session.currentUser.id,
    errors: state.errors.track,
    track
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.params.trackId ? 'update' : 'create';
  const processForm = formType === 'update' ? updateTrack : createTrack;

  return {
    processForm: track => dispatch(processForm(track)),
    fetchTrack: id => dispatch(fetchTrack(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
