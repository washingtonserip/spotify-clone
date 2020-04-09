import React from 'react';
import { albumsMock } from './album-list-view.mock';
import AlbumListView from './album-list-view';

export default {
  title: 'Components/Album List',
};

export const standard = () => (
  <AlbumListView
    albums={albumsMock}
  />
);
