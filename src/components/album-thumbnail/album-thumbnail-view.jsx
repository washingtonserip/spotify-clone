import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Image,
  AlbumName,
  ArtistName,
} from './album-thumbnail-styles';

function AlbumThumbnailView({
  cover,
  name,
  artists,
}) {
  return (
    <Wrapper>
      <Image
        src={cover}
        alt="Nome do álbum"
      />

      <AlbumName>
        {name}
      </AlbumName>

      <ArtistName>
        {artists.join(', ')}
      </ArtistName>
    </Wrapper>
  );
}

AlbumThumbnailView.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string),
};

AlbumThumbnailView.getDefaultProps = {
  artists: [],
};

export default AlbumThumbnailView;
