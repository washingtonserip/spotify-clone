import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter, Link } from 'react-router-dom';
import { mount } from 'enzyme';
import LayoutView from './layout-view';

describe('LayoutView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <LayoutView>Content</LayoutView>
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('includes link to home screen', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LayoutView>Content</LayoutView>
      </MemoryRouter>,
    );

    expect(wrapper.find(Link).props().to).toBe('/');
  });
});
