import {
  EVENT_SUBSCRIBED,
  EVENT_RECEIVED,
  TICKER_CHANNEL,
  RECORDS_TOTAL,
  BOOK_CHANNEL,
  TRADES_CHANNEL,
  EVENT_SYNC,
} from '../constants';


import {
  findChanNameById,
  addItemToTop,
} from './socket.utils';


const socketReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case EVENT_SUBSCRIBED: {
      const { chanId, channel } = payload;

      return {
        ...state,
        [channel]: {
          chanId,
          channel,
          // for not removing records afer reconnection
          records: (state[channel] || { records: [] }).records,
        },
      };
    }


    case EVENT_RECEIVED: {
      const channel = findChanNameById(state, payload.chanId);

      if (channel === TICKER_CHANNEL) {
        return {
          ...state,
          [`${channel}Store`]: {
            ...state[channel],
            records: payload.records,
          },
        };
      }

      if (channel === BOOK_CHANNEL || channel === TRADES_CHANNEL) {
        // snapshot
        if (Array.isArray(payload.records[0])) {
          return {
            ...state,
            [`${channel}Store`]: {
              ...state[channel],
              records: addItemToTop(
                (state[channel] || {}).records,
                payload.records[0],
                RECORDS_TOTAL,
              ),
            },
          };
        }

        // update
        return {
          ...state,
          [`${channel}Store`]: {
            ...state[channel],
            records: addItemToTop(
              (state[channel] || {}).records,
              payload.records,
              RECORDS_TOTAL,
            ),
          },
        };
      }
    }


    case EVENT_SYNC: {
      return {
        ...state,
        [TICKER_CHANNEL]: {
          ...state[`${TICKER_CHANNEL}Store`],
        },
        [BOOK_CHANNEL]: {
          ...state[`${BOOK_CHANNEL}Store`],
        },
        [TRADES_CHANNEL]: {
          ...state[`${TRADES_CHANNEL}Store`],
        },
      };
    }


    default:
      return state;
  }
};

export default socketReducer;
