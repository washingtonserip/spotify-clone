import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mockAlbums } from './home-view.mock';
import HomeView from './home-view';

describe('HomeView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <HomeView
            albums={mockAlbums}
          />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
