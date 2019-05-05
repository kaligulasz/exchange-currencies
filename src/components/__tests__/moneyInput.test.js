import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import theme from '../../common/themeVariables';

import MoneyInput from '../MoneyInput';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <ThemeProvider theme={theme}>
      <MoneyInput maxValue={20} onChange={() => {}} />
    </ThemeProvider>,
  );
});

describe('<MoneyInput />', () => {
  it('renders <MoneyInput /> with passed props', () => {
    const component = shallow(
      <MoneyInput maxValue={20} onChange={() => {}} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('check input validation', () => {
    const event = { target: { name: 'money-input', value: '20' } };
    wrapper.find('input').simulate('change', event);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual('20');
  });

  it('check input validation: two numbers after dot', () => {
    const event = { target: { name: 'money-input', value: '20.000' } };
    wrapper.find('input').simulate('change', event);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual('');
  });

  it('check input validation: max value', () => {
    const event = { target: { name: 'money-input', value: '31' } };
    wrapper.find('input').simulate('change', event);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual('');
  });

  it('check input validation: max two zero characters before dot', () => {
    const event = { target: { name: 'money-input', value: '00000.' } };
    wrapper.find('input').simulate('change', event);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual('');
  });

  it('check input validation: only numbers are allowed', () => {
    const event = { target: { name: 'money-input', value: 'someText' } };
    wrapper.find('input').simulate('change', event);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual('');
  });

  it('check input validation: only one dot is allowed', () => {
    const event = { target: { name: 'money-input', value: '10.10.0' } };
    wrapper.find('input').simulate('change', event);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual('');
  });
});
