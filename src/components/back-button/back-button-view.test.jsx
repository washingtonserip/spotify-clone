import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import BackButtonView from './back-button-view';

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
    const wrapper = mount(<BackButtonView />);

    wrapper
      .find('button')
      .first()
      .simulate('click');

    expect(mockGoBack).toBeCalledTimes(1);
  });
});
