import React from 'react';
import { mockResults } from './search-view.mock';
import SearchView from './search-view';

export default {
  title: 'Pages/Search/View',
};

export const withResults = () => (
  <SearchView
    query="Eminem"
    results={mockResults}
  />
);

export const withoutResults = () => (
  <SearchView
    query="Eminem"
    results={[]}
  />
);
