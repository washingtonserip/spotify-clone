import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LoginView from './login-view';
import { Button } from './login-styles';

const mockRedirectToSpotify = jest.fn();

describe('LoginView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <LoginView
          redirectToSpotify={mockRedirectToSpotify}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should redirect to Spotify when click in login button', () => {
    const wrapper = shallow(
      <LoginView
        redirectToSpotify={mockRedirectToSpotify}
      />,
    );

    wrapper
      .find(Button)
      .first()
      .simulate('click');

    expect(mockRedirectToSpotify).toHaveBeenCalledTimes(1);
  });
});
