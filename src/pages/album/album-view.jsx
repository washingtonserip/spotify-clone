import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import BackButton from '../../components/back-button';
import AlbumCover from './components/album-cover';
import TrackList from './components/track-list';
import {
  AlbumWrapper,
  CoverColumn,
  TrackColumn,
} from './album-styles';

function AlbumView({
  cover,
  name,
  artists,
  tracks,
}) {
  return (
    <Layout>
      <BackButton />

      <AlbumWrapper>
        <CoverColumn>
          <AlbumCover
            cover={cover}
            name={name}
            artists={artists}
          />
        </CoverColumn>

        <TrackColumn>
          <TrackList
            tracks={tracks}
          />
        </TrackColumn>
      </AlbumWrapper>
    </Layout>
  );
}

AlbumView.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string),
  tracks: PropTypes.arrayOf(PropTypes.object),
};

AlbumView.getDefaultProps = {
  artists: [],
  tracks: [],
};

export default AlbumView;
