import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mockAlbum } from './album-thumbnail-view.mock';
import AlbumThumbnailView from './album-thumbnail-view';

describe('AlbumThumbnailView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <AlbumThumbnailView
            id={mockAlbum.id}
            cover={mockAlbum.cover}
            name={mockAlbum.name}
            artists={mockAlbum.artists}
          />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
