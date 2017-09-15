import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as actions from './actions';
import counters from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

window.actions = actions;
const store = createStore(counters);
window.store = store;


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
