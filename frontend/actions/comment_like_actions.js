import * as APIUtil from '../utils/comment_like_api_util';

export const createLike = like => dispatch => (
  APIUtil.createLike(like)
);

export const destroyLike = id => dispatch => (
  APIUtil.destroyLike(id)
);
