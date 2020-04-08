import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BackButtonView from './back-button-view';
import { Button } from './back-button-styles';

const mockGoBack = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn().mockImplementation(() => ({
    goBack: mockGoBack,
  })),
}));

describe('BackButtonView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<BackButtonView />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should navigate to previus page', () => {
    const wrapper = shallow(<BackButtonView />);

    wrapper
      .find(Button)
      .first()
      .simulate('click');

    expect(mockGoBack).toBeCalledTimes(1);
  });
});
