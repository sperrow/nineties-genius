import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

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
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
