import React from 'react';
import PropTypes from 'prop-types';
import AlbumThumbnail from '../../../../components/album-thumbnail';
import { Wrapper } from './search-results-styles';

function SearchResultsView({ results }) {
  return (
    <Wrapper>
      {results.map((album) => (
        <AlbumThumbnail
          key={album.id}
          cover={album.images[0].url}
          name={album.name}
          artists={album.artists.map((artist) => artist.name)}
        />
      ))}
    </Wrapper>
  );
}

SearchResultsView.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResultsView;
