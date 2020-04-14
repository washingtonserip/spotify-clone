export const getSearchState = (state) => state.search;

export const getAllSearchCached = (state) => getSearchState(state).byQueries;

export const getCachedAlbumsByQuery = (query) => (state) => getAllSearchCached(state)[query];

export const getError = (state) => getSearchState(state).error;

export const isFetching = (state) => getSearchState(state).isFetching;
