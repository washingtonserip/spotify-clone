import * as selectors from './selectors';
import {
  mockState,
  mockId,
  mockAlbum,
  mockError,
} from './albums.mock';

describe('albums selectors', () => {
  test('getAlbumsState should returns albums state', () => {
    expect(selectors.getAlbumsState(mockState)).toEqual(mockState.albums);
  });

  test('getAllAlbums should returns albums list', () => {
    expect(selectors.getAllAlbums(mockState)).toEqual(mockState.albums.byIds);
  });

  test('getAlbumById should returns the album', () => {
    expect(selectors.getAlbumById(mockId)(mockState)).toEqual(mockAlbum);
  });

  test('getError should returns error object', () => {
    expect(selectors.getError(mockState)).toEqual(mockError);
  });

  test('isFetching should returns false', () => {
    expect(selectors.isFetching(mockState)).toEqual(false);
  });
});
