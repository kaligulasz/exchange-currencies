import React from 'react';
import { shallow } from 'enzyme';

import RequestLoader from '../RequestLoader';
import Loader from '../Loader';

describe('<RequestLoader />', () => {
  it('renders loader component when status is initial', () => {
    const componentWithChildren = shallow(
      <RequestLoader status="initial">
        <div>example children</div>
      </RequestLoader>,
    );

    expect(componentWithChildren.contains(<Loader />)).toBe(true);
  });

  it('renders children when status is successful', () => {
    const componentWithChildren = shallow(
      <RequestLoader status="successful">
        <div>example children</div>
      </RequestLoader>,
    );

    expect(componentWithChildren.contains(<div>example children</div>)).toBe(true);
  });

  it('renders error component when status is failed', () => {
    const componentWithChildren = shallow(
      <RequestLoader status="failed">
        <div>example children</div>
      </RequestLoader>,
    );

    expect(componentWithChildren).toMatchSnapshot();
  });
});
