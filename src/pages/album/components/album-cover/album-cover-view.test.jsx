import React from 'react';
import renderer from 'react-test-renderer';
import AlbumCoverView from './album-cover-view';
import { mockAlbumCover } from '../../album-view.mock';

describe('AlbumCoverView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <AlbumCoverView
          cover={mockAlbumCover.cover}
          name={mockAlbumCover.name}
          artists={mockAlbumCover.artists}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
