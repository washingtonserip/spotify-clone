import React from 'react';
import {
  Wrapper,
  List,
} from './track-list-styles';
import TrackItem from '../track-item';

function TrackListView() {
  return (
    <Wrapper>
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => <TrackItem key={key} />)}
      </List>
    </Wrapper>
  );
}

export default TrackListView;
