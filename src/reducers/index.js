import { combineReducers } from 'redux';

import mainPocket from './mainPocketReducer';


/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  mainPocket,
});

export default AppReducer;
