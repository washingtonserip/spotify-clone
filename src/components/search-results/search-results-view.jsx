import React from 'react';
import AlbumThumbnail from '../album-thumbnail';
import { Wrapper } from './search-results-styles';

function SearchResultsView() {
  return (
    <Wrapper>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <AlbumThumbnail />)}
    </Wrapper>
  );
}

export default SearchResultsView;
