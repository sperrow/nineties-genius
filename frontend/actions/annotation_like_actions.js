import * as APIUtil from '../utils/annotation_like_api_util';

export const createAnnotationLike = like => dispatch => (
  APIUtil.createLike(like)
);

export const destroyAnnotationLike = id => dispatch => (
  APIUtil.destroyLike(id)
);
