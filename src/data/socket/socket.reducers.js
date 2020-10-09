import { EVENT_SUBSCRIBED, EVENT_RECEIVED } from '../constants';

const socketReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case EVENT_SUBSCRIBED:
      return {
        ...state,
        [payload.chanId]: {
          ...payload,
        },
      };

    case EVENT_RECEIVED:
      return {
        ...state,
        [payload.chanId]: {
          ...state[payload.chanId],
          records: payload.records,
        },
      };

    default:
      return state;
  }
};

export default socketReducer;
