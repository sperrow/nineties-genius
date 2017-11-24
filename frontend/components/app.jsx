import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute } from '../utils/route_util';
import SiteNav from './nav/site_nav';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <SiteNav />
    <AuthRoute path="/login" component={() => <SessionFormContainer formType="login" />} />
    <AuthRoute path="/signup" component={() => <SessionFormContainer formType="signup" />} />
  </div>
);

export default App;
