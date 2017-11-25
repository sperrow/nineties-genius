import { connect } from 'react-redux';
import { createTrack, updateTrack } from '../../utils/track_api_util';
import TrackForm from './track_form';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.formType === 'create' ? createTrack : updateTrack;

  return {
    processForm: track => dispatch(processForm(track))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
