import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';

import * as actions from './actions';
import counters from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(counters);

// for ver' nice debuggingz
window.actions = actions;
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
