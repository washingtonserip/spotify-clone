import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveCacheAlbums } from '../../redux/search-cache/actions';
import { getCachedAlbumsByQuery } from '../../redux/search-cache/selectors';
import SearchProvider from '../../providers/search';
import SearchView from './search-view';

function SearchContainer() {
  const { query } = useParams();
  const chachedAlbums = useSelector(getCachedAlbumsByQuery(query));
  const dispatch = useDispatch();

  function searchAlbuns() {
    SearchProvider.searchV1(query)
      .then((res) => res.json())
      .then((res) => dispatch(saveCacheAlbums(query, res.albums)));
  }

  function verifyCacheAndFetchAlbums() {
    if (query && !chachedAlbums) {
      searchAlbuns();
    }
  }

  verifyCacheAndFetchAlbums();

  return (
    <SearchView
      query={query || ''}
      results={chachedAlbums && chachedAlbums.items ? chachedAlbums.items : []}
    />
  );
}

export default SearchContainer;
