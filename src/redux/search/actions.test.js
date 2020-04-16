import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from './action-types';
import * as actions from './actions';
import {
  mockQuery,
  mockResults,
  mockError,
  mockEmptyState,
} from './search.mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('search actions', () => {
  test('toggleSearchLoading should create TOGGLE_SEARCH_LOADING action', () => {
    expect(actions.toggleSearchLoading()).toEqual({
      type: types.TOGGLE_SEARCH_LOADING,
    });
  });

  test('searchAlbunsSuccess should create SEARCH_ALBUMS_SUCCESS action', () => {
    expect(actions.searchAlbunsSuccess(mockQuery, mockResults)).toEqual({
      type: types.SEARCH_ALBUMS_SUCCESS,
      payload: {
        query: mockQuery,
        albums: mockResults,
      },
    });
  });

  test('searchAlbunsFailure should create SEARCH_ALBUMS_FAILURE action', () => {
    expect(actions.searchAlbunsFailure(mockError)).toEqual({
      type: types.SEARCH_ALBUMS_FAILURE,
      payload: {
        error: mockError,
      },
    });
  });

  test('creates SEARCH_ALBUMS_SUCCESS when search Albums has been done', () => {
    const endpoint = `${process.env.API_URL}/v1/search?q=${mockQuery}&type=album`;
    fetchMock.getOnce(endpoint, {
      body: mockResults,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.TOGGLE_SEARCH_LOADING },
      {
        type: types.SEARCH_ALBUMS_SUCCESS,
        payload: {
          query: mockQuery,
          albums: mockResults.albums,
        },
      },
    ];
    const store = mockStore(mockEmptyState);

    return store.dispatch(actions.searchAlbuns(mockQuery))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
