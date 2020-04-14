import {
  TOGGLE_FETCHING_ALBUMS,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
} from './action-types';

const initialState = {
  isFetching: false,
  error: {},
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FETCHING_ALBUMS: {
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    }
    case FETCH_ALBUMS_SUCCESS: {
      const { id, album } = action.payload;

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...album,
            request_date: new Date(),
          },
        },
      };
    }
    case FETCH_ALBUMS_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
}
