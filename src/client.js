import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import StaticRouter from 'react-router-dom/StaticRouter';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

// import "./assets/scss/argon-dashboard-react.scss";

import './client.css';
import routes from './routes';
import store from './store';

const App = ({ data }) => (
  <Provider store={store()}>
    <BrowserRouter>
        <After data={data} routes={routes} />
    </BrowserRouter>
  </Provider>
);

ensureReady(routes).then(afterData => {
  return hydrate(
    <App data={afterData} />,
    document.getElementById('root')
  )
  
  });

  // for ssr
export const AppStatic = ({ data }) => (
  <Provider store={store()}>
    <StaticRouter>
      <After data={data} routes={routes} />
    </StaticRouter>
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}
