import * as APIUtil from '../utils/annotation_api_util';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';

export const receiveAnnotation = annotation => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const createAnnotation = annotation => dispatch => (
  APIUtil.createAnnotation(annotation).then(createdAnnotation => (
    dispatch(receiveAnnotation(createdAnnotation))
  ))
);
