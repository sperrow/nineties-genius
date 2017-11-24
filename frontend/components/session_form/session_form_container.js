import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const formType = ownProps.location.pathname.slice(1);
  // const processForm = (formType === 'login') ? login : signup;
  const processForm = ownProps.formType === 'signup' ? signup : login;

  return {
    processForm: user => dispatch(processForm(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
