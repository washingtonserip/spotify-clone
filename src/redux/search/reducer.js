import {
  TOGGLE_SEARCH_LOADING,
  SEARCH_ALBUMS_SUCCESS,
  SEARCH_ALBUMS_FAILURE,
} from './action-types';

const initialState = {
  isLoading: false,
  error: {},
  byQueries: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SEARCH_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }

    case SEARCH_ALBUMS_SUCCESS: {
      const { query, albums } = action.payload;

      return {
        ...state,
        byQueries: {
          ...state.byQueries,
          [query]: {
            ...albums,
          },
        },
      };
    }

    case SEARCH_ALBUMS_FAILURE: {
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
