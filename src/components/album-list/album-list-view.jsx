import React from 'react';
import AlbumThumbnail from '../album-thumbnail';
import { Wrapper } from './album-list-styles';

function AlbumListView() {
  return (
    <Wrapper>
      {[0, 1, 2, 3, 4].map(() => <AlbumThumbnail />)}
    </Wrapper>
  );
}

export default AlbumListView;
