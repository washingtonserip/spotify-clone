import React from 'react';
import AlbumView from './album-view';
import { mockAlbumCover, mockTracks } from './album-view.mock';

export default {
  title: 'Pages/Album/View',
};

export const standard = () => (
  <AlbumView
    cover={mockAlbumCover.cover}
    name={mockAlbumCover.name}
    artists={mockAlbumCover.artists}
    tracks={mockTracks}
  />
);
