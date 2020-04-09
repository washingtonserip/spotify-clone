import React from 'react';
import TrackListView from './track-list-view';
import { mockTracks } from '../../album-view.mock';

export default {
  title: 'Pages/Album/Components/Track List',
};

export const standard = () => (
  <TrackListView
    tracks={mockTracks}
  />
);
