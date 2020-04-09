import React from 'react';
import TrackItemView from './track-item-view';
import { mockTrackItem } from '../../album-view.mock';

export default {
  title: 'Pages/Album/Components/Track Item',
};

export const standard = () => (
  <TrackItemView
    index={mockTrackItem.index}
    name={mockTrackItem.name}
    duration={mockTrackItem.duration}
  />
);
