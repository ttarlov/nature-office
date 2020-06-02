import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import './index.scss';
import App from './components/App/App.jsx';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import GlobalStore from './store/GlobalStore'
import { Router } from 'react-router'

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
  // Key can be whatever you want
  routing: routingStore,
  dataStore: GlobalStore
  // ...other stores
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
   
      <Provider {...stores}>
    <Router history= {history}>
          <App />
    </Router>
        </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
