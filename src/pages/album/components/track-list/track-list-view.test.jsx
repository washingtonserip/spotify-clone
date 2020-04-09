import React from 'react';
import renderer from 'react-test-renderer';
import TrackListView from './track-list-view';
import { mockTracks } from '../../album-view.mock';

jest.mock('../../../../utils/time', () => ({
  millisToMinutesAndSeconds: jest.fn(),
}));

describe('TrackListView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <TrackListView
          tracks={mockTracks}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
