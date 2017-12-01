import { combineReducers } from 'redux';
import tracksReducer from './tracks_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';

const entitiesReducer = combineReducers({
  tracks: tracksReducer,
  artists: artistsReducer,
  albums: albumsReducer
});

export default entitiesReducer;
