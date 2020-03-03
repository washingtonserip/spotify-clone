import { SAVE_ALBUM } from './action-types';

const initialState = {
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_ALBUM: {
      const { id, album } = action.payload;

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...album,
            request_date: new Date(),
          },
        },
      };
    }
    default:
      return state;
  }
}
