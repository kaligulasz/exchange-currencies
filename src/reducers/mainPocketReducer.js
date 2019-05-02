import {
  UPDATE_MAIN_POCKET,
} from '../actions/mainPocketActions';

const mainPocket = (state = {
  pockets: {
    usd: {
      currencySymbol: '$',
      currency: 'USD',
      description: 'USD - American Dollar',
      amount: 30.31,
      id: 1,
    },
    eur: {
      currencySymbol: '€',
      currency: 'EUR',
      description: 'EUR - Euro',
      amount: 20.10,
      id: 2,
    },
    gbp: {
      currencySymbol: '£',
      currency: 'GBP',
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

export default mainPocket;
