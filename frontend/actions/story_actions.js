import * as APIUtil from '../utils/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';

export const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

export const fetchStories = () => dispatch => (
  APIUtil.fetchStories().then(stories => (
    dispatch(receiveStories(stories))
  ))
);
