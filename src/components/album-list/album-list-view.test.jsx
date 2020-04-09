import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { albumsMock } from './album-list-view.mock';
import AlbumListView from './album-list-view';
import AlbumThumbnail from '../album-thumbnail';

describe('AlbumListView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <AlbumListView
            albums={albumsMock}
          />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should display the AlbumThumbnail component 5 times', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AlbumListView
          albums={albumsMock}
        />
      </MemoryRouter>,
    );

    expect(wrapper.find(AlbumThumbnail)).toHaveLength(albumsMock.length);
  });
});
