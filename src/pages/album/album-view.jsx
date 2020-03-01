import React from 'react';
import Layout from '../../components/layout';
import BackButton from '../../components/back-button';
import AlbumCover from './components/album-cover';
import TrackList from './components/track-list';
import {
  AlbumWrapper,
  CoverColumn,
  TrackColumn,
} from './album-styles';

function AlbumView() {
  return (
    <Layout>
      <BackButton />

      <AlbumWrapper>
        <CoverColumn>
          <AlbumCover />
        </CoverColumn>

        <TrackColumn>
          <TrackList />
        </TrackColumn>
      </AlbumWrapper>
    </Layout>
  );
}

export default AlbumView;
