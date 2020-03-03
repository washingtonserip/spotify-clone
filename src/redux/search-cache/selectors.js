export const getSearchCacheState = (state) => state.searchCache;

export const getAllSearchCached = (state) => getSearchCacheState(state).byQueries;

export const getCachedAlbumsByQuery = (query) => (state) => getAllSearchCached(state)[query];
