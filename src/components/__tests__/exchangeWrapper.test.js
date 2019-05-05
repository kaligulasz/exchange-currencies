import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ExchangeWrapper from '../ExchangeWrapper';

const mockStore = configureStore();

let store;
const initialStore = {
  mainPocket: {
    pockets: {
      usd: {
        currencySymbol: '$',
        currency: 'usd',
        description: 'USD - American Dollar',
        amount: 0.73,
        id: 1,
      },
      eur: {
        currencySymbol: '€',
        currency: 'eur',
        description: 'EUR - Euro',
        amount: 46.38,
        id: 2,
      },
      gbp: {
        currencySymbol: '£',
        currency: 'gbp',
        description: 'GBP - British Pound',
        amount: 25.63,
        id: 3,
      },
    },
  },
  currencyRates: {
    status: 'initial',
    currencies: {
      usd: {
        currency: '$',
        rate: 1,
        id: 1,
      },
      eur: {
        currency: '€',
        rate: 0.89194,
        id: 2,
      },
      gbp: {
        currency: '£',
        rate: 0.75913,
        id: 3,
      },
    },
  },
  exchangePocket: {
    pockets: {
      usd: {
        currencySymbol: '$',
        currency: 'usd',
        description: 'USD - American Dollar',
        amount: 0.73,
        id: 1,
      },
      eur: {
        currencySymbol: '€',
        currency: 'eur',
        description: 'EUR - Euro',
        amount: 46.38,
        id: 2,
      },
      gbp: {
        currencySymbol: '£',
        currency: 'gbp',
        description: 'GBP - British Pound',
        amount: 25.63,
        id: 3,
      },
    },
  },
};

beforeEach(() => {
  store = mockStore(initialStore);
});

describe('<ExchangeWrapper />', () => {
  it('renders <ExchangeWrapper />', () => {
    const component = shallow(
      <ExchangeWrapper store={store} />,
    ).dive();

    expect(component).toMatchSnapshot();
  });
});
