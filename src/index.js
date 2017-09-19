import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import MartaDashContainer from './MartaDashContainer';
import registerServiceWorker from './registerServiceWorker';

// import * as actions from './actions';
import rootReducer from './reducers';

import {
  createStore,
  applyMiddleware
} from 'redux';

import reduxPromise from 'redux-promise';

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

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
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/count">Ah Ah</Link>
          </li>
          <li>
            <Link to="/marta">It's Smarta</Link>
          </li>
        </ul>
        <Route path="/count" component={ AppContainer } />
        <Route path="/marta" component={ MartaDashContainer } />
      </div>
    </Router>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
