import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mockResults } from '../../search-view.mock';
import SearchResultsView from './search-results-view';

describe('SearchResultsView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SearchResultsView
            results={mockResults}
          />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
