import { headers as apiHeaders } from '../../utils/api';
import {
  TOGGLE_SEARCH_LOADING,
  SEARCH_ALBUMS_SUCCESS,
  SEARCH_ALBUMS_FAILURE,
} from './action-types';

export const toggleSearchLoading = () => ({
  type: TOGGLE_SEARCH_LOADING,
});

export const searchAlbunsSuccess = (searchQuery, albums) => ({
  type: SEARCH_ALBUMS_SUCCESS,
  payload: {
    query: searchQuery,
    albums,
  },
});

export const searchAlbunsFailure = (error) => ({
  type: SEARCH_ALBUMS_FAILURE,
  payload: {
    error,
  },
});

export const searchAlbuns = (query) => (dispatch) => {
  const endpoint = `${process.env.API_URL}/v1/search?`;
  const queryString = new URLSearchParams({
    q: query,
    type: 'album',
  });

  dispatch(toggleSearchLoading());

  return fetch(`${endpoint}${queryString.toString()}`, apiHeaders('GET'))
    .then((res) => res.json())
    .then((body) => dispatch(searchAlbunsSuccess(query, body.albums)))
    .catch((error) => dispatch(searchAlbunsFailure(error)));
};
