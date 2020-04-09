import React from 'react';
import { mockAlbum } from './album-thumbnail-view.mock';
import AlbumThumbnailView from './album-thumbnail-view';

export default {
  title: 'Components/Album Thumbnail',
};

export const standard = () => (
  <AlbumThumbnailView
    id={mockAlbum.id}
    cover={mockAlbum.cover}
    name={mockAlbum.name}
    artists={mockAlbum.artists}
  />
);
