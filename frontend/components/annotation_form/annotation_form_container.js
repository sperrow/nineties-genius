import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import { createAnnotation } from '../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const mapStateToProps = (state, ownProps) => {
  const track = ownProps.match.params.trackId ? state.entities.tracks[ownProps.match.params.trackId] : null;
  return {
    userId: state.session.currentUser.id,
    errors: state.errors.track,
    track
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAnnotation: annotation => dispatch(createAnnotation(annotation)),
    fetchTrack: id => dispatch(fetchTrack(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnotationForm);
