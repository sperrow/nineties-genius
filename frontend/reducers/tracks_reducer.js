import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions';
import merge from 'lodash/merge';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TRACK:
      let newState = merge({}, state);
      newState[action.track.id] = action.track;
      return newState;
    case RECEIVE_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default tracksReducer;
