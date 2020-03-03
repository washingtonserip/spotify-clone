export const getAlbumsState = (state) => state.albums;

export const getAllAlbums = (state) => getAlbumsState(state).byIds;

export const getCachedAlbumById = (id) => (state) => getAllAlbums(state)[id];
