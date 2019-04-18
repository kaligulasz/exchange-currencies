import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';


/**
 * Configure Store
 * @return {Object} - The whole state tree the your application
 */
const configureStore = (reducer, rootSaga) => {
  let store;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({ name: 'exchange-currencies' });
    store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
  } else {
    store = applyMiddleware(...middlewares)(createStore)(reducer);
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
