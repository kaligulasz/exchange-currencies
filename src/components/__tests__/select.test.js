import React from 'react';
import { shallow } from 'enzyme';

import Select from '../Select';

describe('<Select />', () => {
  it('renders select with passed options', () => {
    const component = shallow(
      <Select
        onChange={() => {}}
        options={['USD, GBP, EUR']}
        selected="USD"
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
