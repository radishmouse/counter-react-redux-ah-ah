import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';

import * as actions from './actions';
import counters from './reducers';
import marta from './marta';
import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';

import fetchMartaData from './fetchMartaData';

const rootReducer = combineReducers({
  counters,
  marta
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    reduxPromise
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// for ver' nice debuggingz
window.actions = actions;
window.store = store;
window.fetchMartaData = fetchMartaData;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
