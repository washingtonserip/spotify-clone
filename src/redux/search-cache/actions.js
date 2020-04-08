import { SAVE_CACHE_ALBUMS } from './action-types';

export const saveCacheAlbums = (searchQuery, albums) => ({
  type: SAVE_CACHE_ALBUMS,
  payload: {
    query: searchQuery,
    albums,
  },
});
