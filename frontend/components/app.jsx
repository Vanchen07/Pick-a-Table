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
import RestaurantContainer from './restaurant/restaurant_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
      <Modal/>
      <SplashContainer />
      <Switch>
        <Route path="/:restaurantName" component={RestaurantContainer} />
        {/* <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
  </div>
);

export default App;