import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Modal from './modal/modal';
import SplashContainer from './splash/splash_container';
import RestaurantShowContainer from './restaurant_show/restaurant_show_container';
import SearchContainer from './search/search_container';
import { ProtectedRoute } from '../util/route_util';
import ReservationsContainer from './profile/reservations_container';
import UpdateReservationFormContainer from './reservation_form/update_reservation_form_container'

const App = () => (
  <div>
    <Modal/>
    <Switch>
        <Route exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/reservations/:id" component={UpdateReservationFormContainer}/>
        <ProtectedRoute path="/reservations" component={ReservationsContainer}/>
        <ProtectedRoute path="/history" component={ReservationsContainer}/>
        <Route path="/search" component={SearchContainer} />
        <Route path="/:restaurantName" component={RestaurantShowContainer} />
    </Switch>
  </div>
);

export default App;