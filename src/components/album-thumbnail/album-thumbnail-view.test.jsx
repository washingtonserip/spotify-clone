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
            id="4otkd9As6YaxxEkIjXPiZ6"
            cover="https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c"
            name="Music To Be Murdered By"
            artists={['Eminem']}
          />
        </MemoryRouter>
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
