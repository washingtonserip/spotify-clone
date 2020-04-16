import * as selectors from './selectors';
import {
  mockState,
  mockQuery,
  mockResults,
  mockError,
} from './search.mock';

describe('search selectors', () => {
  test('getSearchState should returns search state', () => {
    expect(selectors.getSearchState(mockState)).toEqual(mockState.search);
  });

  test('getAllSearchCached should returns albums list', () => {
    expect(selectors.getAllSearchCached(mockState)).toEqual(mockState.search.byQueries);
  });

  test('getCachedAlbumsByQuery should returns the album', () => {
    expect(selectors.getCachedAlbumsByQuery(mockQuery)(mockState))
      .toEqual(mockResults.albums.items);
  });

  test('getError should returns error object', () => {
    expect(selectors.getError(mockState)).toEqual(mockError);
  });

  test('isFetching should returns false', () => {
    expect(selectors.isFetching(mockState)).toEqual(false);
  });
});
