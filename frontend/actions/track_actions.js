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

export const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const fetchTrack = id => dispatch => (
  APIUtil.fetchTrack(id).then(track => (
    dispatch(receiveTrack(track))
  ))
);

export const fetchTracks = () => dispatch => (
  APIUtil.fetchTracks().then(tracks => (
    dispatch(receiveTracks(tracks))
  ))
);

export const createTrack = track => dispatch => (
  APIUtil.createTrack(track).then(createdTrack => (
    dispatch(receiveTrack(createdTrack))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ))
);

export const updateTrack = track => dispatch => (
  APIUtil.updateTrack(track).then(updatedTrack => (
    dispatch(receiveTrack(updatedTrack))
  ), err => (
    dispatch(receiveTrackErrors(err.responseJSON))
  ))
);
