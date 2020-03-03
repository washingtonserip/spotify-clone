import { SAVE_CACHE_ALBUMS } from './action-types';

const initialState = {
  byQueries: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_CACHE_ALBUMS: {
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
    default:
      return state;
  }
}
