import {
  EVENT_SUBSCRIBED,
  EVENT_RECEIVED,
  TICKER_CHANNEL,
  BOOK_RECORDS_TOTAL,
  BOOK_CHANNEL,
} from '../constants';


import {
  findChanNameById,
  addItemToTop,
} from './socket.utils';


const socketReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case EVENT_SUBSCRIBED:
      return {
        ...state,
        [payload.channel]: {
          ...payload,
          records: [],
        },
      };

    case EVENT_RECEIVED:
      const channel = findChanNameById(state, payload.chanId);

      if (channel === TICKER_CHANNEL) {
        return {
          ...state,
          [channel]: {
            ...state[channel],
            records: payload.records,
          },
        };
      }

      if (channel === BOOK_CHANNEL) {
        return {
          ...state,
          [channel]: {
            ...state[channel],
            records: addItemToTop(
              (state[channel] || {}).records,
              payload.records,
              BOOK_RECORDS_TOTAL,
            ),
          },
        };
      }

    default:
      return state;
  }
};

export default socketReducer;
