import React from 'react';
import { mockResults } from '../../search-view.mock';
import SearchResultsView from './search-results-view';

export default {
  title: 'Pages/Search/Components/Search Results',
};

export const standard = () => (
  <SearchResultsView
    results={mockResults}
  />
);
