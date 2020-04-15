import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from './action-types';
import * as actions from './actions';
import {
  mockId,
  mockAlbum,
  mockError,
  mockEmptyState,
} from './albums.mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('albums actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('toggleFetchingAlbums should create TOGGLE_FETCHING_ALBUMS action', () => {
    expect(actions.toggleFetchingAlbums()).toEqual({
      type: types.TOGGLE_FETCHING_ALBUMS,
    });
  });

  test('fetchAlbumsSuccess should create FETCH_ALBUMS_SUCCESS action', () => {
    expect(actions.fetchAlbumsSuccess(mockId, mockAlbum)).toEqual({
      type: types.FETCH_ALBUMS_SUCCESS,
      payload: {
        id: mockId,
        album: mockAlbum,
      },
    });
  });

  test('fetchAlbumsFailure should create FETCH_ALBUMS_FAILURE action', () => {
    expect(actions.fetchAlbumsFailure(mockError)).toEqual({
      type: types.FETCH_ALBUMS_FAILURE,
      payload: {
        error: mockError,
      },
    });
  });

  test('creates FETCH_ALBUMS_SUCCESS when fetching albums has been done', () => {
    fetchMock.getOnce(`${process.env.API_URL}/v1/albums/${mockId}`, {
      body: mockAlbum,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.TOGGLE_FETCHING_ALBUMS },
      {
        type: types.FETCH_ALBUMS_SUCCESS,
        payload: {
          id: mockId,
          album: mockAlbum,
        },
      },
    ];
    const store = mockStore(mockEmptyState);

    return store.dispatch(actions.fetchAlbums(mockId))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
