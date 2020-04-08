import React from 'react';
import renderer from 'react-test-renderer';
import AlbumCoverView from './album-cover-view';

describe('AlbumCoverView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <AlbumCoverView
          cover="https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c"
          name="Music To Be Murdered By"
          artists={['Eminem']}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
