import {
  UPDATE_CURRENCY_RATES_SUCCESSFUL,
  UPDATE_CURRENCY_RATES_FAILED,
  UPDATE_CURRENCY_RATES_CANCELLED,
} from '../actions/currencyRatesActions';

const currencyRates = (state = {
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
}, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY_RATES_SUCCESSFUL:
      return {
        ...state,
        status: 'successful',
        currencies: {
          ...state.currencies,
          usd: {
            ...state.currencies.usd,
            rate: action.payload.rates.USD,
          },
          eur: {
            ...state.currencies.eur,
            rate: action.payload.rates.EUR,
          },
          gbp: {
            ...state.currencies.gbp,
            rate: action.payload.rates.GBP,
          },
        },
      };
    case UPDATE_CURRENCY_RATES_FAILED:
      return {
        ...state,
        status: 'failed',
      };
    case UPDATE_CURRENCY_RATES_CANCELLED:
      return {
        ...state,
        status: 'initial',
      };
    default:
      return state;
  }
};

export const getStatus = state => state.currencyRates.status;
export const getCurrencyRates = state => state.currencyRates.currencies;

export default currencyRates;
