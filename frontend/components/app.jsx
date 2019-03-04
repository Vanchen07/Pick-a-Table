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
import RestaurantShowContainer from './restaurant_show/restaurant_show_container';
import RestaurantsIndexContainer from './restaurants_index/restaurants_index_container';
import SearchContainer from './search/search_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
      <Modal/>
      {/* <SplashContainer /> */}
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/:restaurantName" component={RestaurantsIndexContainer} />
    </Switch>
  </div>
);

export default App;