import React from 'react';
import { shallow } from 'enzyme';

import Message from '../Message';

describe('<Message />', () => {
  it('renders children and message', () => {
    const componentWithChildren = shallow(
      <Message message="example error message">
        <div>some children</div>
      </Message>,
    );

    expect(componentWithChildren).toMatchSnapshot();
  });
});
