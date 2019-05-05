import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import theme from '../../common/themeVariables';

import Button from '../Button';

describe('<Button />', () => {
  it('renders children when passed in', () => {
    const componentWithChildren = shallow(
      <Button onClick={() => {}}>
        {'example children'}
      </Button>,
    );

    expect(componentWithChildren.contains('example children')).toBe(true);
  });

  it('simulates click event', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <Button onClick={onButtonClick} theme={theme}>
        {'example children'}
      </Button>
    ));

    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});
