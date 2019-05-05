import ErrorMessage from '../ErrorMessage';

describe('<ErrorMessage />', () => {
  it('renders children and message', () => {
    const componentWithChildren = shallow(
      <ErrorMessage message="example error message">
        <div>some children</div>
      </ErrorMessage>,
    );

    expect(componentWithChildren).toMatchSnapshot();
  });
});
