import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Components
import App from './containers/App';

// Store
import configureStore from './configureStore';
import reducers from './reducers/index';

const store = configureStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
