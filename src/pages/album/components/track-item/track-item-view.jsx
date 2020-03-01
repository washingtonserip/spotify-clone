import React from 'react';
import {
  Track,
  TrackNumber,
  TrackName,
  TrackDuration,
} from './track-item-styles';

function TrackItemView() {
  return (
    <Track>
      <TrackNumber>5.</TrackNumber>
      <TrackName>Nome da faixa</TrackName>
      <TrackDuration>3:32</TrackDuration>
    </Track>
  );
}

export default TrackItemView;
