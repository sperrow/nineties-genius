import { connect } from 'react-redux';
import { createLike, destroyLike } from '../../actions/comment_like_actions';
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

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  destroyLike: like => dispatch(destroyLike(like))
});

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
