import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';

// import * as actions from './actions';
import rootReducer from './reducers';

import {
  createStore,
  applyMiddleware
} from 'redux';

import reduxPromise from 'redux-promise';

import { Provider } from 'react-redux';

const createAsyncStore = applyMiddleware(reduxPromise)(createStore);
const store = createAsyncStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// for ver' nice debuggingz
// window.actions = actions;
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
