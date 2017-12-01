import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SiteNav from './nav/site_nav';
import Footer from './footer/footer';
import SessionFormContainer from './session_form/session_form_container';
import TrackIndexContainer from './track_index/track_index_container';
import TrackFormContainer from './track_form/track_form_container';
import TrackShowContainer from './track_show/track_show_container';
import ArtistFormContainer from './artist_form/artist_form_container';
import ArtistShowContainer from './artist_show/artist_show_container';
import AlbumFormContainer from './album_form/album_form_container';
import AlbumShowContainer from './album_show/album_show_container';

const App = () => (
  <div>
    <SiteNav />
    <Switch>
      <AuthRoute path="/login" component={() => <SessionFormContainer formType="login" />} />
      <AuthRoute path="/signup" component={() => <SessionFormContainer formType="signup" />} />
      <Route exact path="/" component={TrackIndexContainer} />
      <ProtectedRoute path="/tracks/new" component={TrackFormContainer} />
      <ProtectedRoute path="/tracks/:trackId/edit" component={TrackFormContainer} />
      <ProtectedRoute path="/artists/new" component={ArtistFormContainer} />
      <ProtectedRoute path="/artists/:artistId/edit" component={ArtistFormContainer} />
      <ProtectedRoute path="/albums/new" component={AlbumFormContainer} />
      <ProtectedRoute path="/albums/:albumId/edit" component={AlbumFormContainer} />
      <Route path="/tracks/:trackId" component={TrackShowContainer} />
      <Route path="/artists/:artistId" component={ArtistShowContainer} />
      <Route path="/albums/:albumId" component={AlbumShowContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
