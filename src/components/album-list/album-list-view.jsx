import React from 'react';
import PropTypes from 'prop-types';
import AlbumThumbnail from '../album-thumbnail';
import { Wrapper } from './album-list-styles';

function AlbumListView({ albums }) {
  return (
    <Wrapper>
      {albums.map((album) => (
        <AlbumThumbnail
          key={album.id}
          id={album.id}
          cover={album.images[0].url}
          name={album.name}
          artists={album.artists.map((artist) => artist.name)}
        />
      ))}
    </Wrapper>
  );
}

AlbumListView.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AlbumListView;
