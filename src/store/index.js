import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'seamless-immutable';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
// import rootSaga from 'sagas';

// const sagaMiddleware = createSagaMiddleware();
const windowExist = typeof window === 'object';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  windowExist && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

/* eslint-enable */
export default function configureStore(initialState = {}) {
  /* eslint-disable no-param-reassign */
  if (!initialState.toJS) initialState = Immutable(initialState);

  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

//   const store = createStore(
//     rootReducer(),
//     initialState,
//     composeEnhancers(applyMiddleware(sagaMiddleware)),
//   );

//   store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}