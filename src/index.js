import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App.jsx';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import GlobalStore from './store/GlobalStore'
import { BrowserRouter } from 'react-router-dom'
// import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

// const routingStore = new RouterStore();
// const stores = {
//   // Key can be whatever you want
//   routing: routingStore,
//   // ...other stores
// };

// const history = syncHistoryWithStore(browserHistory, routingStore);
ReactDOM.render(
   
      <Provider GlobalStore={GlobalStore}>
    <BrowserRouter>
          <App />
    </BrowserRouter>
        </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
