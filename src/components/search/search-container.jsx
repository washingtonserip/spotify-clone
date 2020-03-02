import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import SearchView from './search-view';

function SearchContainer({ query }) {
  const [searchValue, setSearchValue] = useState();
  const [searchDelay, setSearchDelay] = useState();
  const searchText = searchValue !== undefined ? searchValue : decodeURIComponent(query);
  const history = useHistory();

  function updateRoute(value) {
    const searchUrl = value ? `/search/${encodeURIComponent(value)}` : '/search';
    history.push(searchUrl);
  }

  function doSearch(value) {
    clearTimeout(searchDelay);
    setSearchValue(value);
    setSearchDelay(setTimeout(() => updateRoute(value), 600));
  }

  return (
    <SearchView
      searchText={searchText}
      doSearch={doSearch}
    />
  );
}

SearchContainer.propTypes = {
  query: PropTypes.string,
};

SearchContainer.getDefaultProps = {
  query: '',
};

export default SearchContainer;
