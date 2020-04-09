import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchView from './search-view';

export default {
  title: 'Components/Search',
};

export const withoutText = () => (
  <SearchView
    searchText=""
    doSearch={action('do-search')}
  />
);

export const withText = () => (
  <SearchView
    searchText="Eminem"
    doSearch={action('do-search')}
  />
);
