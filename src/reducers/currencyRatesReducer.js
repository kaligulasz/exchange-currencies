import {
  UPDATE_RATES,
} from '../actions/currencyRatesActions';

const currencyRates = (state = {
  currencies: [
    {
      currency: '$',
      rate: 0,
      id: 1,
    },
    {
      currency: '€',
      rate: 0,
      id: 2,
    },
    {
      currency: '£',
      rate: 0,
      id: 3,
    },
  ],
}, action) => {
  switch (action.type) {
    case UPDATE_RATES:
      return {
        ...state,
        pockets: [],
      };
    default:
      return state;
  }
};

export default currencyRates;
