import * as APIUtil from '../utils/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbumErrors = errors => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors
});

export const fetchAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id).then(album => (
    dispatch(receiveAlbum(album))
  ))
);

export const fetchAlbums = () => dispatch => (
  APIUtil.fetchAlbums().then(albums => (
    dispatch(receiveAlbums(albums))
  ))
);

export const createAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(createdAlbum => (
    dispatch(receiveAlbum(createdAlbum))
  ), err => (
    dispatch(receiveAlbumErrors(err.responseJSON))
  ))
);

export const updateAlbum = album => dispatch => (
  APIUtil.updateAlbum(album).then(updatedAlbum => (
    dispatch(receiveAlbum(updatedAlbum))
  ), err => (
    dispatch(receiveAlbumErrors(err.responseJSON))
  ))
);
