import theme from '../../common/themeVariables';

import RequestLoader from '../RequestLoader';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import { Error } from 'styled-icons/boxicons-regular/Error';
import React from 'react';
import styled from 'styled-components';

const ErrorIcon = styled(Error)`
  margin-right: 0.5em;
`;

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
