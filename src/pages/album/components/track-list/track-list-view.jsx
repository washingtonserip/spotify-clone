import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  List,
} from './track-list-styles';
import TrackItem from '../track-item';

function TrackListView({ tracks }) {
  return (
    <Wrapper>
      <List>
        {tracks.map((track, index) => (
          <TrackItem
            key={track.id}
            index={index}
            name={track.name}
            duration={track.duration_ms}
          />
        ))}
      </List>
    </Wrapper>
  );
}

TrackListView.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
};

TrackListView.getDefaultProps = {
  tracks: [],
};

export default TrackListView;
