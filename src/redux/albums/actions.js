import { SAVE_ALBUM } from './action-types';

// eslint-disable-next-line import/prefer-default-export
export const saveAlbum = (id, album) => ({
  type: SAVE_ALBUM,
  payload: {
    id,
    album,
  },
});
