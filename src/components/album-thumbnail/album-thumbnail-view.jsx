import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Image,
  AlbumName,
  ArtistName,
} from './album-thumbnail-styles';

function AlbumThumbnailView({
  id,
  cover,
  name,
  artists,
}) {
  return (
    <Wrapper>
      <Link to={`/album/${id}`}>
        <Image
          src={cover}
          alt={name}
        />

        <AlbumName>
          {name}
        </AlbumName>

        <ArtistName>
          {artists.join(', ')}
        </ArtistName>
      </Link>
    </Wrapper>
  );
}

AlbumThumbnailView.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string),
};

AlbumThumbnailView.getDefaultProps = {
  artists: [],
};

export default AlbumThumbnailView;
