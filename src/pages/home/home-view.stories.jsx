import React from 'react';
import HomeView from './home-view';
import { mockAlbums } from './home-view.mock';

export default {
  title: 'Pages/Home/View',
};

export const standard = () => (
  <HomeView
    albums={mockAlbums}
  />
);
