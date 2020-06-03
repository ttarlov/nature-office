import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App.jsx'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'mobx-react'
import GlobalStore from './store/GlobalStore'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider GlobalStore={GlobalStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
