import { SAVE_CACHE_ALBUMS } from './action-types';

// eslint-disable-next-line import/prefer-default-export
export const saveCacheAlbums = (searchQuery, albums) => ({
  type: SAVE_CACHE_ALBUMS,
  payload: {
    query: searchQuery,
    albums,
  },
});
