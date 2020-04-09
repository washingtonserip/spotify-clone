import React from 'react';
import AlbumCoverView from './album-cover-view';
import { mockAlbumCover } from '../../album-view.mock';

export default {
  title: 'Pages/Album/Components/Album Cover',
};

export const standard = () => (
  <AlbumCoverView
    cover={mockAlbumCover.cover}
    name={mockAlbumCover.name}
    artists={mockAlbumCover.artists}
  />
);
