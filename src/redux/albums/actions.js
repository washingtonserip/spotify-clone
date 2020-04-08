import { SAVE_ALBUM } from './action-types';

export const saveAlbum = (id, album) => ({
  type: SAVE_ALBUM,
  payload: {
    id,
    album,
  },
});
