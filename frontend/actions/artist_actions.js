import * as APIUtil from '../utils/artist_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtistErrors = errors => ({
  type: RECEIVE_ARTIST_ERRORS,
  errors
});

export const fetchArtist = id => dispatch => (
  APIUtil.fetchArtist(id).then(artist => (
    dispatch(receiveArtist(artist))
  ))
);

export const fetchArtists = () => dispatch => (
  APIUtil.fetchArtists().then(artists => (
    dispatch(receiveArtists(artists))
  ))
);

export const createArtist = artist => dispatch => (
  APIUtil.createArtist(artist).then(createdArtist => (
    dispatch(receiveArtist(createdArtist))
  ), err => (
    dispatch(receiveArtistErrors(err.responseJSON))
  ))
);

export const updateArtist = artist => dispatch => (
  APIUtil.updateArtist(artist).then(updatedArtist => (
    dispatch(receiveArtist(updatedArtist))
  ), err => (
    dispatch(receiveArtistErrors(err.responseJSON))
  ))
);
