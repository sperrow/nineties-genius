import { connect } from 'react-redux';
import { createCommentLike, destroyCommentLike } from '../../actions/comment_like_actions';
import { createAnnotationLike, destroyAnnotationLike } from '../../actions/annotation_like_actions';
import Likes from './likes';

const mapStateToProps = state => {
  let userId = null;
  if (state.session.currentUser) {
    userId = state.session.currentUser.id;
  }

  return {
    userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.likeType === 'comment') {
    return {
      createLike: like => dispatch(createCommentLike(like)),
      destroyLike: like => dispatch(destroyCommentLike(like))
    };
  } else {
    return {
      createLike: like => dispatch(createAnnotationLike(like)),
      destroyLike: like => dispatch(destroyAnnotationLike(like))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
