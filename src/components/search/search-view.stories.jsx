import React from 'react';
import SearchView from './search-view';

export default {
  title: 'Components/Search',
};

export const withoutText = () => (
  <SearchView
    searchText=""
    doSearch={() => {}}
  />
);

export const withText = () => (
  <SearchView
    searchText="Eminem"
    doSearch={() => {}}
  />
);
