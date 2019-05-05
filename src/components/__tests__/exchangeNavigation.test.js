import React from 'react';
import { shallow } from 'enzyme';

import ExchangeNavigation from '../ExchangeNavigation';

describe('<ExchangeNavigation />', () => {
  it('renders ExchangeNavigation', () => {
    const component = shallow(<ExchangeNavigation />);

    expect(component).toMatchSnapshot();
  });
});
