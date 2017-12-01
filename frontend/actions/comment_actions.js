import * as APIUtil from '../utils/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(createdComment => (
    dispatch(receiveComment(createdComment))
  ))
);

export const destroyComment = id => dispatch => (
  APIUtil.destroyComment(id)
);
