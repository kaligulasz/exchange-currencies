import Loader from '../Loader';

describe('<Loader />', () => {
  it('renders loader', () => {
    const component = shallow(<Loader />);

    expect(component).toMatchSnapshot();
  });
});
