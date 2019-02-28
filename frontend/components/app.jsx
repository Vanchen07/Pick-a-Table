import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Modal from './modal/modal'

import SplashContainer from './splash/splash_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    {/* <div>
      <Link to="/" className="header-link">
        <h1>Pick-A-Table</h1>
      </Link>
    </div> */}
      <SplashContainer />
  </div>
);

export default App;