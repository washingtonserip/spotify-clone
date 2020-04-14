import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchAlbuns } from '../../redux/search/actions';
import { getCachedAlbumsByQuery } from '../../redux/search/selectors';
import SearchView from './search-view';

function SearchContainer() {
  const { query } = useParams();
  const chachedAlbums = useSelector(getCachedAlbumsByQuery(query));
  const dispatch = useDispatch();

  function verifyAndSearchAlbums() {
    if (query && !chachedAlbums) {
      dispatch(searchAlbuns(query));
    }
  }

  useEffect(() => verifyAndSearchAlbums(), [query]);

  return (
    <SearchView
      query={query || ''}
      results={chachedAlbums && chachedAlbums.items ? chachedAlbums.items : []}
    />
  );
}

export default SearchContainer;
