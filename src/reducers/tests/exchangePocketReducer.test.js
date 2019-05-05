import reducer from '../exchangePocketReducer';
import {
  SET_CURRENCY_AMOUNT,
  SYNC_WITH_MAIN_POCKET,
} from '../../actions/exchangePocketActions';

describe('exchangePocketReducer reducer', () => {
  const state = {
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
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
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
    });
  });

  it('should handle SET_CURRENCY_AMOUNT', () => {
    expect(reducer(state, {
      type: SET_CURRENCY_AMOUNT,
      amount: 10,
      currency: 'usd',
    })).toEqual({
      pockets: {
        usd: {
          currencySymbol: '$',
          currency: 'usd',
          description: 'USD - American Dollar',
          amount: 10,
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
    });
  });

  it('should handle SYNC_WITH_MAIN_POCKET', () => {
    expect(reducer(state, {
      type: SYNC_WITH_MAIN_POCKET,
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
    })).toEqual({
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
    });
  });
});
