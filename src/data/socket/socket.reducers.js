import { EVENT_SUBSCRIBED, EVENT_RECEIVED } from '../constants';

const findNameById = (state, id) => {
  const { channel } = Object.values(state).find(({ chanId }) => chanId === id) || {};
  return channel;
};

const socketReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case EVENT_SUBSCRIBED:
      return {
        ...state,
        [payload.channel]: {
          ...payload,
        },
      };

    case EVENT_RECEIVED:
      const channel = findNameById(state, payload.chanId);

      if (channel) {
        return {
          ...state,
          [channel]: {
            ...state[channel],
            records: payload.records,
          },
        };
      }

    default:
      return state;
  }
};

export default socketReducer;
