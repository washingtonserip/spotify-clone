import { headers as apiHeaders } from '../../utils/api';
import {
  TOGGLE_FETCHING_ALBUMS,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
} from './action-types';

export const toggleFetchingAlbums = () => ({
  type: TOGGLE_FETCHING_ALBUMS,
});

export const fetchAlbumsSuccess = (id, album) => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: {
    id,
    album,
  },
});

export const fetchAlbumsFailure = (error) => ({
  type: FETCH_ALBUMS_FAILURE,
  payload: {
    error,
  },
});

export const fetchAlbums = (id) => (dispatch) => {
  const endpoint = `${process.env.API_URL}/v1/albums/${id}`;
  dispatch(toggleFetchingAlbums());

  return fetch(endpoint, apiHeaders('GET'))
    .then((res) => res.json())
    .then((body) => dispatch(fetchAlbumsSuccess(id, body)))
    .catch((error) => dispatch(fetchAlbumsFailure(error)));
};
