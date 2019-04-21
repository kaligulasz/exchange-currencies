import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Configure Store
 * @return {Object} - The whole state tree the your application
 */
const configureStore = (reducer) => {
  let store;
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({ name: 'exchange-currencies' });
    store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
  } else {
    store = applyMiddleware(...middlewares)(createStore)(reducer);
  }

  return store;
};

export default configureStore;
