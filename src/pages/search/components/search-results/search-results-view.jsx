import React from 'react';
import AlbumThumbnail from '../../../../components/album-thumbnail';
import { Wrapper } from './search-results-styles';

function SearchResultsView() {
  return (
    <Wrapper>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => <AlbumThumbnail key={key} />)}
    </Wrapper>
  );
}

export default SearchResultsView;
