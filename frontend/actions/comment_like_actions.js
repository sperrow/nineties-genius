import * as APIUtil from '../utils/comment_like_api_util';

export const createCommentLike = like => dispatch => (
  APIUtil.createLike(like)
);

export const destroyCommentLike = id => dispatch => (
  APIUtil.destroyLike(id)
);
