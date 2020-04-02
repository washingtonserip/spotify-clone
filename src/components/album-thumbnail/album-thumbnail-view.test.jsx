import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import AlbumThumbnailView from './album-thumbnail-view';

describe('AlbumThumbnailView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create((
        <MemoryRouter>
          <AlbumThumbnailView
            id="XPTO"
            cover="XPTO"
            name="XPTO"
            artists={['XPTO']}
          />
        </MemoryRouter>
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
