import {
  EVENT_SUBSCRIBED,
  EVENT_RECEIVED,
  SOCKET_CLOSED,
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

  if (Array.isArray(data) && Array.isArray(data[1])) {
    const [chanId, records] = data;

    return dispatch({
      type: EVENT_RECEIVED,
      payload: {
        chanId,
        records,
      }
    });
  }

  return console.info('unexpected event: ', data);
};

export const socketClose = () => (dispatch) => dispatch({
  type: SOCKET_CLOSED,
});
