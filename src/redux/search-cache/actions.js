import { SAVE_CACHE_ALBUMS } from './action-types';
import { normalizeString } from '../../utils/strings';

// eslint-disable-next-line import/prefer-default-export
export const saveCacheAlbums = (searchQuery, albums) => ({
  type: SAVE_CACHE_ALBUMS,
  payload: {
    query: encodeURIComponent(normalizeString(searchQuery)),
    albums,
  },
});
