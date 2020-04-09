import React from 'react';
import renderer from 'react-test-renderer';
import TrackItemView from './track-item-view';
import { mockTrackItem } from '../../album-view.mock';

jest.mock('../../../../utils/time', () => ({
  millisToMinutesAndSeconds: jest.fn(),
}));

describe('TrackItemView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <TrackItemView
          index={mockTrackItem.index}
          name={mockTrackItem.name}
          duration={mockTrackItem.duration}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
