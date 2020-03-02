export const getAllSearchCached = (state) => state.byQueries;

export const getCachedAlbumsByQuery = (state, query) => state.byQueries[query];
