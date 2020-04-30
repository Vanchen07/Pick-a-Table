import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import restaurantsReducer from './restaurants_reducer';
import reservationsReducer from './reservations_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantsReducer,
  reservations: reservationsReducer,
  search: searchReducer
});

export default entitiesReducer;