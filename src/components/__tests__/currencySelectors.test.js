import React from 'react';
import { shallow } from 'enzyme';

import CurrencySelectors from '../CurrencySelectors';

const currencyList = ['usd', 'eur', 'gbp'];

describe('<CurrencySelectors />', () => {
  it('renders <CurrencySelectors />', () => {
    const component = shallow(
      <CurrencySelectors
        currencyList={currencyList}
      />,
    ).dive();

    expect(component).toMatchSnapshot();
  });
});
