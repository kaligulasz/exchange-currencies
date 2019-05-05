import reducer from '../currencyRatesReducer';
import {
  UPDATE_CURRENCY_RATES_SUCCESSFUL,
  UPDATE_CURRENCY_RATES_FAILED,
  UPDATE_CURRENCY_RATES_CANCELLED,
} from '../../actions/currencyRatesActions';

describe('currencyRatesReducer reducer', () => {
  const state = {
    status: 'initial',
    currencies: {
      usd: {
        currency: '$',
        rate: 0,
        id: 1,
      },
      eur: {
        currency: '€',
        rate: 0,
        id: 2,
      },
      gbp: {
        currency: '£',
        rate: 0,
        id: 3,
      },
    },
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      status: 'initial',
      currencies: {
        usd: {
          currency: '$',
          rate: 0,
          id: 1,
        },
        eur: {
          currency: '€',
          rate: 0,
          id: 2,
        },
        gbp: {
          currency: '£',
          rate: 0,
          id: 3,
        },
      },
    });
  });

  it('should handle UPDATE_CURRENCY_RATES_SUCCESSFUL', () => {
    expect(reducer(state, {
      type: UPDATE_CURRENCY_RATES_SUCCESSFUL,
      payload: {
        disclaimer: 'Usage subject to terms: https://openexchangerates.org/terms',
        license: 'https://openexchangerates.org/license',
        timestamp: 1557042983,
        base: 'USD',
        rates: {
          EUR: 0.891923,
          GBP: 0.759129,
          USD: 1,
        },
      },
    })).toEqual({
      status: 'successful',
      currencies: {
        usd: {
          currency: '$',
          rate: 1,
          id: 1,
        },
        eur: {
          currency: '€',
          rate: 0.891923,
          id: 2,
        },
        gbp: {
          currency: '£',
          rate: 0.759129,
          id: 3,
        },
      },
    });
  });

  it('should handle UPDATE_CURRENCY_RATES_FAILED', () => {
    expect(reducer({}, {
      type: UPDATE_CURRENCY_RATES_FAILED,
    })).toEqual({
      status: 'failed',
    });
  });

  it('should handle UPDATE_CURRENCY_RATES_CANCELLED', () => {
    expect(reducer({}, {
      type: UPDATE_CURRENCY_RATES_CANCELLED,
    })).toEqual({
      status: 'initial',
    });
  });
});
