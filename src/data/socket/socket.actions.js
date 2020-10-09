import {
  EVENT_SUBSCRIBED,
  EVENT_RECEIVED,
  SOCKET_CLOSED,
  EVENT_SYNC,
} from '../constants';

export const socketMessage = ({ data: rawData }) => (dispatch) => {
  const data = JSON.parse(rawData);

  if (data.event === 'subscribed') {
    return dispatch({
      type: EVENT_SUBSCRIBED,
      payload: {
        chanId: data.chanId,
        channel: data.channel,
      },
    });
  }

  if (Array.isArray(data)) {
    const [chanId, secondItem, thirdItem] = data;

    // records can be found in second or third item in the array
    const records = Array.isArray(secondItem)
      ? secondItem
      : Array.isArray(thirdItem)
        ? thirdItem
        : null;

    if (records) {
      return dispatch({
        type: EVENT_RECEIVED,
        payload: {
          chanId,
          records,
        }
      });
    }
  }

  return console.info('non-treated event: ', data);
};

export const socketClose = () => (dispatch) => dispatch({
  type: SOCKET_CLOSED,
});

export const syncEvent = () => (dispatch) => dispatch({
  type: EVENT_SYNC,
});
