import { createSelector } from 'reselect';

import {
  UPDATE_MAIN_POCKET,
} from '../actions/mainPocketActions';

const mainPocket = (state = {
  pockets: {
    usd: {
      currencySymbol: '$',
      currency: 'usd',
      description: 'USD - American Dollar',
      amount: 30.31,
      id: 1,
    },
    eur: {
      currencySymbol: '€',
      currency: 'eur',
      description: 'EUR - Euro',
      amount: 20.10,
      id: 2,
    },
    gbp: {
      currencySymbol: '£',
      currency: 'gbp',
      description: 'GBP - British Pound',
      amount: 25.55,
      id: 3,
    },
  },
}, action) => {
  switch (action.type) {
    case UPDATE_MAIN_POCKET:
      return {
        ...state,
        pockets: action.pockets,
      };
    default:
      return state;
  }
};

export const getMainPocket = state => state.mainPocket.pockets;
export const getMainPocketCurrencyList = createSelector(
  [getMainPocket],
  pockets => Object.keys(pockets),
);

export default mainPocket;
