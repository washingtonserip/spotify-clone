import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Image,
  AlbumName,
  ArtistName,
} from './album-cover-styles';

function AlbumCoverView({
  cover,
  name,
  artists,
}) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

AlbumCoverView.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string),
};

AlbumCoverView.getDefaultProps = {
  artists: [],
};

export default AlbumCoverView;
