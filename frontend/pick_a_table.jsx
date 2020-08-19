import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {
        session: { currentUserId: window.currentUser.id },
        entities: {
        users: { [window.currentUser.id]: window.currentUser }
        }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
      if (document.querySelector(".user_bootstrap")) {
        document.querySelector(".user_bootstrap").remove() 
      }
    } else {
      store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    
  });