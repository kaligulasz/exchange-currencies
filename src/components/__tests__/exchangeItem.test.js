import React from 'react';
import { shallow } from 'enzyme';

import ExchangeItem from '../ExchangeItem';

const mainPocket = {
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
    amount: 20.1,
    id: 2,
  },
  gbp: {
    currencySymbol: '£',
    currency: 'gbp',
    description: 'GBP - British Pound',
    amount: 25.55,
    id: 3,
  },
};

const pocket = {
  currencySymbol: '$',
  currency: 'usd',
  description: 'USD - American Dollar',
  amount: 30.31,
  id: 1,
};

describe('<ExchangeItem />', () => {
  it('renders <ExchangeItem primary/>', () => {
    const component = shallow(
      <ExchangeItem
        mainPocket={mainPocket}
        pocket={pocket}
        onAmountChange={() => {}}
        primary
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('renders <ExchangeItem secondary/>', () => {
    const component = shallow(
      <ExchangeItem
        mainPocket={mainPocket}
        pocket={pocket}
        actualRate={0.79}
        changingFromCurrencySymbol="$"
        secondary
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
