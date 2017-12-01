import { RECEIVE_ARTIST, RECEIVE_ARTISTS, RECEIVE_ARTIST_ERRORS } from '../actions/artist_actions';

const artistErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTIST:
      return [];
    case RECEIVE_ARTISTS:
      return [];
    case RECEIVE_ARTIST_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default artistErrorsReducer;
