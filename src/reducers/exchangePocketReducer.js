import { SET_CURRENCY_AMOUNT, SYNC_WITH_MAIN_POCKET } from '../actions/exchangePocketActions';

const exchangePocket = (state = {
  pockets: {
    usd: {
      currencySymbol: '$',
      currency: 'usd',
      description: 'USD - American Dollar',
      amount: 0,
      id: 1,
    },
    eur: {
      currencySymbol: '€',
      currency: 'eur',
      description: 'EUR - Euro',
      amount: 0,
      id: 2,
    },
    gbp: {
      currencySymbol: '£',
      currency: 'gbp',
      description: 'GBP - British Pound',
      amount: 0,
      id: 3,
    },
  },
}, action) => {
  switch (action.type) {
    case SYNC_WITH_MAIN_POCKET:
      return {
        ...state,
        pockets: action.pockets,
      };
    case SET_CURRENCY_AMOUNT:
      return {
        ...state,
        pockets: {
          ...state.pockets,
          [action.currency]: {
            ...state.pockets[action.currency],
            amount: Number((Math.round(action.amount * 100) / 100).toFixed(2)),

          },
        },
      };
    default:
      return state;
  }
};

export const getExchangePocket = state => state.exchangePocket.pockets;

export default exchangePocket;
