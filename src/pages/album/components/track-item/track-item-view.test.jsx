import React from 'react';
import renderer from 'react-test-renderer';
import TrackItemView from './track-item-view';

jest.mock('../../../../utils/time', () => ({
  millisToMinutesAndSeconds: jest.fn(),
}));

describe('TrackItemView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <TrackItemView
          index={1}
          name="Premonition - Intro"
          duration="173893"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
