import { combineReducers } from 'redux';

// Reducers
import mainPocket from './mainPocketReducer';
import currencyRates from './currencyRatesReducer';
import exchangePocket from './exchangePocketReducer';

/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  mainPocket,
  currencyRates,
  exchangePocket,
});

export default AppReducer;
