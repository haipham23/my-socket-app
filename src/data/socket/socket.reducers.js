import {
  EVENT_SUBSCRIBED,
  EVENT_RECEIVED,
  TICKER_CHANNEL,
  RECORDS_TOTAL,
  BOOK_CHANNEL,
  TRADES_CHANNEL,
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

      if (channel === BOOK_CHANNEL || channel === TRADES_CHANNEL) {
        return {
          ...state,
          [channel]: {
            ...state[channel],
            records: addItemToTop(
              (state[channel] || {}).records,
              payload.records,
              RECORDS_TOTAL,
            ),
          },
        };
      }

    default:
      return state;
  }
};

export default socketReducer;
