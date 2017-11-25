import * as APIUtil from '../utils/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const fetchTrack = id => dispatch => (
  APIUtil.fetchTrack(id).then(track => (
    dispatch(receiveTrack(track))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchTracks = () => dispatch => (
  APIUtil.fetchTracks().then(tracks => (
    dispatch(receiveTracks(tracks))
  ))
);
