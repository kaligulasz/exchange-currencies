import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/index';
import rootSaga from './sagas/index';

/**
 * Configure Store
 * @return {Object} - The whole state tree the your application
 */
const configureStore = () => {
  let store;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({ name: 'exchange-currencies' });
    store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
  } else {
    store = applyMiddleware(...middlewares)(createStore)(reducers);
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
