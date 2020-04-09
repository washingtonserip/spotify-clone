import React from 'react';
import renderer from 'react-test-renderer';
import AlbumView from './album-view';
import { mockAlbumCover, mockTracks } from './album-view.mock';

jest.mock('../../utils/time', () => ({
  millisToMinutesAndSeconds: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn().mockImplementation(() => ({
    goBack: jest.fn(),
  })),
}));

xdescribe('AlbumView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <AlbumView
          cover={mockAlbumCover.cover}
          name={mockAlbumCover.name}
          artists={mockAlbumCover.artists}
          tracks={mockTracks}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
