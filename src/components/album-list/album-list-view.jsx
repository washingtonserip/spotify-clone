import React from 'react';
import PropTypes from 'prop-types';
import AlbumThumbnail from '../album-thumbnail';
import { Wrapper } from './album-list-styles';

function AlbumListView({ albums }) {
  return (
    <Wrapper>
      {albums.map(({
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

AlbumListView.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AlbumListView;
