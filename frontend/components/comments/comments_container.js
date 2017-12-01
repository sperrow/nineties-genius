import { connect } from 'react-redux';
import { destroyComment } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = state => {
  let userId = null;
  if (state.session.currentUser) {
    userId = state.session.currentUser.id;
  }

  return {
    userId
  };
};

const mapDispatchToProps = dispatch => ({
  destroyComment: id => dispatch(destroyComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
