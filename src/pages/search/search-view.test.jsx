import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mockResults } from './search-view.mock';
import SearchView from './search-view';

describe('SearchView', () => {
  test('renders correctly with results', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SearchView
            query="Eminem"
            results={mockResults}
          />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders correctly without results', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SearchView
            query="Eminem"
            results={[]}
          />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
