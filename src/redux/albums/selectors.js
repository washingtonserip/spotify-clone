export const getAlbumsState = (state) => state.albums;

export const getAllAlbums = (state) => getAlbumsState(state).byIds;

export const getAlbumById = (id) => (state) => getAllAlbums(state)[id];

export const getError = (state) => getAlbumsState(state).error;

export const isFetching = (state) => getAlbumsState(state).isFetching;
