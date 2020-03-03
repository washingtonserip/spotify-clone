import React from 'react';
import PropTypes from 'prop-types';
import { millisToMinutesAndSeconds } from '../../../../utils/time';
import {
  Track,
  TrackNumber,
  TrackName,
  TrackDuration,
} from './track-item-styles';

function TrackItemView({
  index,
  name,
  duration,
}) {
  return (
    <Track>
      <TrackNumber>{index + 1}</TrackNumber>
      <TrackName>{name}</TrackName>
      <TrackDuration>{millisToMinutesAndSeconds(duration)}</TrackDuration>
    </Track>
  );
}

TrackItemView.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TrackItemView;
