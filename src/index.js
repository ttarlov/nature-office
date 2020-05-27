import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App.jsx';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import GlobalStore from './store/GlobalStore'

ReactDOM.render(
    <React.StrictMode>
      <Provider GlobalStore={GlobalStore}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
