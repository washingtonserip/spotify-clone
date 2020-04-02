import React from 'react';
import PropTypes from 'prop-types';
import AlbumThumbnail from '../../../../components/album-thumbnail';
import { Wrapper } from './search-results-styles';

function SearchResultsView({ results }) {
  return (
    <Wrapper>
      {results.map(({
        id,
        images,
        name,
        artists,
      }) => (
        <AlbumThumbnail
          key={id}
          id={id}
          cover={images[0].url}
          name={name}
          artists={artists.map((artist) => artist.name)}
        />
      ))}
    </Wrapper>
  );
}

SearchResultsView.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResultsView;
